const command = new Deno.Command("deno", {
  args: ["run", "--allow-all", "--watch", "./server.tsx"],
  cwd: Deno.cwd(),
  stdin: "inherit",
  stdout: "piped",
  stderr: "piped",
  env: {
    ...Deno.env.toObject(),
    DEV: "true",
  },
});

const process = command.spawn();
process.stdout.pipeTo(Deno.stdout.writable);
process.stderr.pipeTo(Deno.stderr.writable);
