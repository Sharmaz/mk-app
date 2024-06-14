import path from "node:path";
import {
  readFileSync,
  writeFileSync
} from "fs";

const renamePackageJsonName = (targetDir, nameApp) => {
  const packageJsonPath = path.join(targetDir, "package.json");
  try {
    const packageJsonData = readFileSync(packageJsonPath, "utf8");
    const packageJson = JSON.parse(packageJsonData);
    packageJson.name = nameApp;
    writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2),
      "utf8"
    );
  } catch (err) {
    console.log(err.message);
  }
};

export default renamePackageJsonName;
