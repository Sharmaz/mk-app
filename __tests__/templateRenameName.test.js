import { afterEach, beforeEach, describe } from "@jest/globals";
import { join } from 'node:path';
import { mkdirSync, readFileSync, rmSync } from "node:fs";
import * as url from 'url';

import templates from "../src/templateList";
import copyFilesAndDirectories from "../src/templateCopy";

import renamePackageJsonName from "../src/templateRenameName";

const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const mainPath = join(dirname, '..');
const appNameMock = 'vanilla-test-app';
const sourcePath = join(dirname, `../templates/${templates[1].value}`);
const destinationPath = join(mainPath, appNameMock);

beforeEach(() => mkdirSync(destinationPath, { recursive: true }));
afterEach(() => rmSync(destinationPath, { recursive: true, force: true }));

describe('App name in package.json', () => {
  test('Changing the app name in template package.json file', () => {
    copyFilesAndDirectories(sourcePath, destinationPath);
    renamePackageJsonName(destinationPath, appNameMock);
  
    const packageJson = readFileSync(`${destinationPath}/package.json`, 'utf8');
    expect(packageJson).toContain(appNameMock);
  });
});
