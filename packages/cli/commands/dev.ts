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
    args: ["run", "--allow-all", "--watch", "./server.tsx"],
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

  console.log(
    `Your app is running on http://localhost:${port}/api/v2/${service.name}`,
  );

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

  Deno.addSignalListener("SIGINT", shutdown);
  Deno.addSignalListener("SIGTERM", shutdown);

  await Promise.race([serverProcess.status, clientProcess.status]);
  shutdown();
}
