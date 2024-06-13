
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

const templates = [
  {
    value: "minimal-react",
    title: "minimal react app",
    description: "Minimal React App Set Up.",
  },
  {
    value: "vanilla-js",
    title: "vanilla js app",
    description: "Vanilla JS App Set Up.",
  },
];

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
        validate: (val) => val.match(/[a-z]{0,}-[a-z]{0,}/g)
          ? true
          : "App name should not contain special characters except hyphen (-)"
      },
    ]);

    const { appName, template } = response;
    const targetDirectory = path.join(process.cwd(), appName);
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

    const renamePackageJsonName = async (targetDir, nameApp) => {
      const packageJsonPath = path.join(targetDir, "package.json");
      try {
        const packageJsonData = await readFile(packageJsonPath, "utf8");
        const packageJson = JSON.parse(packageJsonData);
        packageJson.name = nameApp;
        await writeFile(
          packageJsonPath,
          JSON.stringify(packageJson, null, 2),
          "utf8"
        );
      } catch (err) {
        console.log(err.message);
      }
    };

    if (!fs.existsSync(targetDirectory)) {
      console.log("Target directory doesn't exist");
      console.log("Creating directory...");
      fs.mkdirSync(targetDirectory, { recursive: true });
      console.log("Finished creating directory");
      await copyFilesAndDirectories(sourceDir, targetDirectory);
      await renamePackageJsonName(targetDirectory, appName);
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
