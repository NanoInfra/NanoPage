const command = new Deno.Command("deno", {
  args: ["bundle", "--watch", "./client.tsx", "-o", "./dist/TEMPLATE/main.js"],
  cwd: Deno.cwd(),
  stdin: "inherit",
  stdout: "piped",
  stderr: "piped",
});

const process = command.spawn();
process.stdout.pipeTo(Deno.stdout.writable);
process.stderr.pipeTo(Deno.stderr.writable);
