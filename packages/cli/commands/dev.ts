import {
  debounce,
  findNearestProjectRoot,
  readServiceConfig,
  ServiceConfig,
} from "../utils.ts";
import * as path from "jsr:@std/path";

function startClient(projectRoot: string, service: ServiceConfig) {
  return new Deno.Command("deno", {
    args: [
      "bundle",
      "--config",
      new URL(
        "./deno.json",
        `file://${projectRoot.endsWith("/") ? projectRoot : projectRoot + "/"}`,
      ).pathname,
      "--watch",
      "./client.tsx",
      "-o",
      `./dist/${service.name}/main.js`,
    ],
    cwd: projectRoot,
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
  }).spawn();
}

function startServer(projectRoot: string, port: number) {
  const server = new Deno.Command("deno", {
    args: ["run", "--allow-all", "./server.tsx"],
    cwd: projectRoot,
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
    env: {
      ...Deno.env.toObject(),
      PORT: port.toString(),
      DEV: "true",
    },
  }).spawn();
  const shutdown = () => {
    try {
      server.kill("SIGTERM");
    } catch (_err) {
      // ignore
    }
  };
  return { server, shutdown };
}

export async function runDevCommand(projectRootArg?: string) {
  const projectRoot = projectRootArg ??
    await findNearestProjectRoot(Deno.cwd());
  const service: ServiceConfig = await readServiceConfig(projectRoot);
  const port = Deno.env.get("PORT") ? Number(Deno.env.get("PORT")) : 8787;
  const client = startClient(projectRoot, service);
  let currentServer = startServer(projectRoot, port);

  // Signals: always shut down both processes
  const onSigint = () => {
    try {
      currentServer.shutdown();
    } catch (_e) { /* ignore */ }
    try {
      client.kill("SIGTERM");
    } catch (_e) { /* ignore */ }
    Deno.exit(130);
  };
  const onSigterm = () => {
    try {
      currentServer.shutdown();
    } catch (_e) { /* ignore */ }
    try {
      client.kill("SIGTERM");
    } catch (_e) { /* ignore */ }
    Deno.exit(143);
  };
  Deno.addSignalListener("SIGINT", onSigint);
  Deno.addSignalListener("SIGTERM", onSigterm);

  // Files to watch for server restart
  const watchFiles = [
    path.join(projectRoot, "index.mustache"),
    path.join(projectRoot, "service.json"),
  ];

  const restartServer = debounce(async () => {
    try {
      currentServer.shutdown();
    } catch (_err) { /* ignore */ }
    await new Promise((r) => setTimeout(r, 150));
    currentServer = startServer(projectRoot, port);
    console.log("[nanopage] watched files changed: server restarted");
  }, 150);
  (async () => {
    try {
      const watcher = Deno.watchFs(watchFiles);
      for await (const _event of watcher) {
        restartServer();
      }
    } catch (err) {
      console.error("[nanopage] watchFs error:", err);
    }
  })();

  console.log(
    `Your app is running on http://localhost:${port}/api/v2/${service.name}`,
  );

  // Exit when client bundler quits
  await client.status;
  onSigterm();
}
