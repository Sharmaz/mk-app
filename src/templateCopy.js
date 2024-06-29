import path from 'node:path';
import {
  copyFileSync,
  lstatSync,
  mkdirSync,
  readdirSync
} from 'node:fs';

const copyFilesAndDirectories = (source, destination) => {
  const entries = readdirSync(source);

  entries.forEach((entry) => {
    const sourcePath = path.join(source, entry);
    let destPath = path.join(destination, entry);

    if (entry === '_gitignore') {
      destPath = path.join(destination, '.gitignore');
    }

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
