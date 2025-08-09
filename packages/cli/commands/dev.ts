import {
  findNearestProjectRoot,
  readServiceConfig,
  ServiceConfig,
} from "../utils.ts";

export async function runDevCommand(projectRootArg?: string) {
  const projectRoot = projectRootArg ??
    await findNearestProjectRoot(Deno.cwd());
  const service: ServiceConfig = await readServiceConfig(projectRoot);

  const port = Deno.env.get("PORT") ? Number(Deno.env.get("PORT")) : 8787;

  const clientCommand = new Deno.Command("deno", {
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
  });

  const serverCommand = new Deno.Command("deno", {
    args: [
      "run",
      "--allow-all",
      "./server.tsx",
    ],
    cwd: projectRoot,
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
    env: {
      ...Deno.env.toObject(),
      PORT: port.toString(),
      DEV: "true",
    },
  });

  const clientProcess = clientCommand.spawn();
  const serverProcess = serverCommand.spawn();

  // Forward signals to children and exit cleanly
  const shutdown = () => {
    try {
      serverProcess.kill("SIGTERM");
    } catch (_) {
      // ignore
    }
    try {
      clientProcess.kill("SIGTERM");
    } catch (_) {
      // ignore
    }
  };

  const onSigint = () => {
    shutdown();
    Deno.exit(130);
  };
  const onSigterm = () => {
    shutdown();
    Deno.exit(143);
  };

  Deno.addSignalListener("SIGINT", onSigint);
  Deno.addSignalListener("SIGTERM", onSigterm);

  console.log(
    `Your app is running on http://localhost:${port}/api/v2/${service.name}`,
  );

  await Promise.race([serverProcess.status, clientProcess.status]);
  // One child exited unexpectedly; propagate shutdown
  onSigterm();
}
