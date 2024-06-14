import path from "node:path";
import {
  copyFileSync,
  lstatSync,
  mkdirSync,
  readdirSync
} from "node:fs";

const copyFilesAndDirectories = (source, destination) => {
  const entries = readdirSync(source);

  entries.forEach((entry) => {
    const sourcePath = path.join(source, entry);
    const destPath = path.join(destination, entry);

    const stat = lstatSync(sourcePath);

    if (stat.isDirectory()) {
      mkdirSync(destPath);
      copyFilesAndDirectories(sourcePath, destPath);
    } else {
      copyFileSync(sourcePath, destPath);
    }

  });
};

export default copyFilesAndDirectories;
