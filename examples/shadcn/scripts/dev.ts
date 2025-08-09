// Run client bundler and server watcher concurrently

import service from "../service.ts";

const port = Deno.env.get("PORT") ? Number(Deno.env.get("PORT")) : 8787;

const clientCmd = new Deno.Command("deno", {
  args: ["bundle", "--watch", "./client.tsx", "-o", "./dist/TEMPLATE/main.js"],
  cwd: Deno.cwd(),
  stdin: "inherit",
  stdout: "inherit",
  stderr: "inherit",
});

const serverCmd = new Deno.Command("deno", {
  args: ["run", "--allow-all", "--watch", "./server.tsx"],
  cwd: Deno.cwd(),
  stdin: "inherit",
  stdout: "inherit",
  stderr: "inherit",
  env: {
    ...Deno.env.toObject(),
    PORT: port.toString(),
    DEV: "true",
  },
});

const client = clientCmd.spawn();
const server = serverCmd.spawn();

console.log(`Your app is running on http://localhost:${port}/api/v2/${service.name}`);

function shutdown() {
  try {
    server.kill("SIGTERM");
  } catch (_err) {
    // ignore: process may already be closed
  }
  try {
    client.kill("SIGTERM");
  } catch (_err) {
    // ignore: process may already be closed
  }
}

Deno.addSignalListener("SIGINT", shutdown);
Deno.addSignalListener("SIGTERM", shutdown);

// If either process exits, try to shut down the other
await Promise.race([server.status, client.status]);
shutdown();
