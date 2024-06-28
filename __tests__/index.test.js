import { expect, beforeAll, afterEach, describe } from '@jest/globals';
import * as url from 'url';
import { join } from 'node:path';
import { rm } from 'node:fs/promises';
import { readFileSync } from "node:fs";
import runTest, { ENTER } from "cli-prompts-test";
import { execa } from 'execa';
import app from '../src/index';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const mainPath = join(dirname, '..');
const appNameMock = 'react-test-app';
const genPath = join(mainPath, appNameMock);

beforeAll(() => rm(genPath, { recursive: true, force: true }));
afterEach(() => rm(genPath, { recursive: true, force: true }));

describe('prompt messages', () => {
  test('prompt initial selection', async () => {
    const { exitCode, stdout } = await runTest([mainPath], []);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Select your setup');
  });
  test('prompt template input app name', async () => {
    const { exitCode, stdout } = await runTest([mainPath], [ENTER]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Enter your app name');
  });
  test('prompt app created', async () => {
    const { exitCode, stdout } = await runTest([mainPath], [ENTER, appNameMock, ENTER]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Finished creating directory');
  });

  test('prompt not avaliable directory', async () => {
    await runTest([mainPath], [ENTER, appNameMock, ENTER]);
    const { exitCode, stdout } = await runTest([mainPath], [ENTER, appNameMock, ENTER]);
    expect(exitCode).toBe(0);
    expect(stdout).toContain('Target directory already exist!');
  });
});

describe('Passing arguments to main app', () => {
  test('Passing template and directory', () => {
    const args = { _: [ appNameMock ], template: 'react-tw' };
    app(args);

    const packageJson = readFileSync(`${genPath}/package.json`, 'utf8');
    expect(packageJson).toContain(appNameMock);
  });

  test('Passing template without directory', () => {
    const args = { _: [], template: 'react-tw' };
    app(args);

    let packageJson;
    try {
      packageJson  = readFileSync(`${genPath}/package.json`, 'utf8');
    } catch(error) {
      packageJson = error;
    }
    expect(packageJson.code).toContain('ENOENT');
  });

  test('Passing help', async () => {
    const args = { _: [], help: true };
    const result = await app(args);

    expect(result).toContain('Usage: mk-app [OPTION]... [DIRECTORY]');
  });

  test('Passing a invalid template', async () => {
    const { stdout } = await execa`node index.js --template no-template ${appNameMock}`;
    console.log(stdout);
    expect(stdout).toContain('Invalid Template');
  });
});
