import "npm:zx@7.1.1/globals";
import { Input, Select } from "@cliffy/prompt";

// ask user which package to publish
const packageName = await Select.prompt({
  message: "Which package to publish?",
  options: [
    "cli",
  ],
});

const version = await Input.prompt({
  message: "Which version to publish?",
});

$`git tag ${packageName}@${version}`;
console.log("tag created");
