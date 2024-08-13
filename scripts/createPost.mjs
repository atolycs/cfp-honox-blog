import { promises } from "node:fs";
import { join, resolve } from "node:path";
import prompts from "prompts";

const __dirname = resolve();

const result = await prompts(
  [
    {
      type: "text",
      name: "entryTitle",
      message: "What is the title of the post?",
    },
    {
      type: "text",
      name: "entryPath",
      message: "Where would you like to save the post?",
    },
  ],
  {
    onCancel: () => {
      console.log("User canceled the prompt.");
      process.exit(0);
    },
  },
);


const entryPostFolder = resolve(__dirname, "app","content", "blog");
const entryTitle = result.entryTitle.toString();
const entryPath = result.entryPath.toString();

if (entryPath.length === 0 || entryTitle.length === 0) {
  console.log("Please provide a title or path for the post.");
  process.exit(1);
}

const date = new Date();

const frontMatter = `---
title: ${entryTitle}
date: ${date.toISOString()}
slug: ${entryPath.split("/").pop()}
published: false
---
`;

promises.writeFile(
    join(entryPostFolder, `${entryPath}.md`),
    frontMatter,
    "utf-8",
);