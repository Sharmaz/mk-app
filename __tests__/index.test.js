import { expect, beforeAll, afterEach, describe } from '@jest/globals';
import * as url from 'url';
import { join } from 'node:path';
import { rm } from 'node:fs/promises';
import runTest, { ENTER } from "cli-prompts-test";

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
