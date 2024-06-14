
import prompts from "prompts";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "fs";

import templates from "./templateList";
import copyFilesAndDirectories from "./templateCopy";
import renamePackageJsonName from "./templateRenameName";

(async () => {
  try {
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
        validate: (val) => val.match(/[a-z]{0,}-?[a-z]{0,}/g)
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

    if (!fs.existsSync(targetDirectory)) {
      console.log("Target directory doesn't exist");
      console.log("Creating directory...");
      fs.mkdirSync(targetDirectory, { recursive: true });
      console.log("Finished creating directory");
      copyFilesAndDirectories(sourceDir, targetDirectory);
      renamePackageJsonName(targetDirectory, appName);
      console.log(`Finished generating your app ${appName}`);
      console.log(`cd ${appName}`);
      console.log(`npm install`);
    } else {
      throw new Error("Target directory already exist!");
    }
  }
  catch(err) {
    console.log(err.message);
  }
})();
