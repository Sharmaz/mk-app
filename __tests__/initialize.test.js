import { afterEach, describe } from "@jest/globals";
import { join } from 'node:path';
import { readFileSync, rmSync, mkdirSync } from "node:fs";
import * as url from 'url';

import templates from "../src/templateList";
import copyFilesAndDirectories from "../src/templateCopy";
import initialize from "../src/initialize";


const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const mainPath = join(dirname, '..');
const appNameMock = 'vanilla-test-app';
const sourcePath = join(dirname, `../templates/${templates[1].value}`);
const destinationPath = join(mainPath, appNameMock);

afterEach(() => rmSync(destinationPath, { recursive: true, force: true }));

describe('Initialize app', () => {
  test('Create a new app', () => {
    initialize(sourcePath, destinationPath, appNameMock);
    
    const packageJson = readFileSync(`${destinationPath}/package.json`, 'utf8');
    expect(packageJson).toContain(appNameMock);
  });
  test('Attempt directory alread exist', () => {
    mkdirSync(destinationPath, { recursive: true })
    copyFilesAndDirectories(sourcePath, destinationPath);
    initialize(sourcePath, destinationPath, appNameMock);
  
    const packageJson = readFileSync(`${destinationPath}/package.json`, 'utf8');
    expect(packageJson).toContain('vanilla-app');
  });
});
