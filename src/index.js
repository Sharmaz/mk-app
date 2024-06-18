
import prompts from "prompts";
import { fileURLToPath } from "node:url";
import path from "node:path";

import templates from "./templateList";
import initialize from "./initialize";

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

    initialize(sourceDir, targetDirectory, appName);
  }
  catch(err) {
    console.log(err.message);
  }
})();
