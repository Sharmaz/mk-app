#!/usr/bin/env node

const templates = [
  {
    value: "minimal-react",
    title: "minimal react app",
    description: "This is the minimal React App Set Up.",
  },
];

import prompts from "prompts";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "fs";
import {
  writeFile,
  lstat,
  readdir,
  mkdir,
  copyFile,
  readFile,
} from "fs/promises";

(async () => {
  try{
    const response = await prompts([
      {
        type: "select",
        name: "template",
        message: "Select your setup",
        choices: templates,
      },
      {
        type: "text",
        name: "appName",
        message: "Enter your app name",
        initial: "my-app",
        format: (val) => val.toLowerCase().split(" ").join("-"),
        validate: (val) => {
          console.log('val', val)
          return val.match(/[a-z]{0,}-[a-z]{0,}/g)
          ? true
          : "App name should not contain special characters except hyphen (-)"
        }
      },
    ]);

    const { appName, template } = response;
    const targetDir = path.join(process.cwd(), appName);
    const sourceDir = path.resolve(
      fileURLToPath(import.meta.url),
      "../../templates",
      `${template}`
    );

    const copyFilesAndDirectories = async (source, destination) => {
      const entries = await readdir(source);

      for (const entry of entries) {
        const sourcePath = path.join(source, entry);
        const destPath = path.join(destination, entry);

        const stat = await lstat(sourcePath);

        if (stat.isDirectory()) {
          await mkdir(destPath);
          await copyFilesAndDirectories(sourcePath, destPath);
        } else {
          await copyFile(sourcePath, destPath);
        }
      }
    };

    const renamePackageJsonName = async (targetDir, appName) => {
      const packageJsonPath = path.join(targetDir, "package.json");
      try {
        const packageJsonData = await readFile(packageJsonPath, "utf8");
        const packageJson = JSON.parse(packageJsonData);
        packageJson.name = appName;
        await writeFile(
          packageJsonPath,
          JSON.stringify(packageJson, null, 2),
          "utf8"
        );
      } catch (err) {
        console.log(err.message);
      }
    };

    if (!fs.existsSync(targetDir)) {
      console.log("Target directory doesn't exist");
      console.log("Creating directory...");
      fs.mkdirSync(targetDir, { recursive: true });
      console.log("Finished creating directory");
      await copyFilesAndDirectories(sourceDir, targetDir);
      await renamePackageJsonName(targetDir, appName);
      console.log(`Finished generating your app ${appName}`);
      console.log(`cd ${appName}`);
      console.log(`npm install`);
    } else {
      throw new Error("Target directory already exist!");
    }
  }
  catch(err){
    console.log(err.message);
  }
})();
