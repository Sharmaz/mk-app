import { afterEach, beforeEach, describe } from "@jest/globals";
import { join } from 'node:path';
import { mkdirSync, readdirSync, rmSync } from "node:fs";
import * as url from 'url';

import copyFilesAndDirectories from "../src/templateCopy";
import templates from "../src/templateList";

const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const mainPath = join(dirname, '..');
const appNameMock = 'vanilla-test-app';
const sourcePath = join(dirname, `../templates/${templates[0].value}`);
const destinationPath = join(mainPath, appNameMock);

beforeEach(() => mkdirSync(destinationPath, { recursive: true }));
afterEach(() => rmSync(destinationPath, { recursive: true, force: true }));

describe('Copying Files', () => {
  test('Copying template files to directory', () => {
    copyFilesAndDirectories(sourcePath, destinationPath);
    const templateFiles = readdirSync(destinationPath);
  
    expect(templateFiles.length).toBeGreaterThan(1);
  });
});
