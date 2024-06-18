import { existsSync, mkdirSync } from "fs";
import copyFilesAndDirectories from "./templateCopy";
import renamePackageJsonName from "./templateRenameName";

async function initialize(sourcePath, destinationPath, name) {
  if (!existsSync(destinationPath)) {
    console.log("Target directory doesn't exist");
    console.log("Creating directory...");
    mkdirSync(destinationPath, { recursive: true });
    console.log("Finished creating directory");
    copyFilesAndDirectories(sourcePath, destinationPath);
    renamePackageJsonName(destinationPath, name);
    console.log(`Finished generating your app ${name}`);
    console.log(`cd ${name}`);
    console.log(`npm install`);
  } else {
    console.log("Target directory already exist!");
  }
}

export default initialize;
