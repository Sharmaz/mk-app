import { expect, beforeAll, afterEach, describe } from '@jest/globals';
import { rm } from 'node:fs/promises';
import runTest, { ENTER } from 'cli-prompts-test';
import { execa } from 'execa';
import { mainPath, appNameMock, genPath } from '../__mocks__/dataMock';

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
  test('Passing a invalid template', async () => {
    const { stdout } = await execa`node index.js --template no-template ${appNameMock}`;
    expect(stdout).toContain('Invalid Template');
  });
});
