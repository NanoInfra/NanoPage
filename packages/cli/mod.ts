import { Command } from "@cliffy/command";
import { runDevCommand } from "./commands/dev.ts";
import { findNearestProjectRoot } from "./utils.ts";

const cmd = new Command()
  .name("nanopage")
  .description("NanoPage CLI")
  .version("0.1.0")
  .arguments("[command]")
  .action(async (_opts: unknown, command?: string) => {
    const projectRoot = await findNearestProjectRoot(Deno.cwd());
    const selected = command ?? "dev";
    if (selected === "dev") {
      await runDevCommand(projectRoot);
      return;
    }
    console.error(`Unknown command: ${selected}`);
    Deno.exit(1);
  })
  .command("dev")
  .description("Run dev server and bundler")
  .action(async () => {
    const projectRoot = await findNearestProjectRoot(Deno.cwd());
    await runDevCommand(projectRoot);
  });

await cmd.parse(Deno.args);
