import rl from "readline-sync";
import { writeFileSync } from "fs";

let names = [];
let processing = true;

while (processing) {
  const name = rl.question("Item Name: ");
  if (name) names.push(name.trim());
  else processing = false;
}

function camel(n) {
  let s = "";
  let un = false;
  for (const c of n) {
    if (un) {
      un = false;
      s += c.toUpperCase();
    } else if (c === " ") un = true;
    else s += c;
  }

  return s[0].toLowerCase() + s.slice(1);
}

writeFileSync(
  "imgTool.ts",
  `${names.map((n) => `import ${camel(n)} from "../img/${n.replaceAll(" ", "_")}.png";`).join("\n")}

  export const items = [
${names.map((n) => `i("${n}", ${camel(n)}),`).join("\n")}
  ];`
);
