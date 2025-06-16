import { expect, beforeAll, afterEach, describe } from '@jest/globals';
import { rm } from 'node:fs/promises';
import runTest, { ENTER } from 'cli-prompts-test';
import { execa } from 'execa';
import { mainPath, appNameMock, genPath } from '../__mocks__/dataMock';

beforeAll(() => rm(genPath, { recursive: true, force: true }));
afterEach(() => rm(genPath, { recursive: true, force: true }));

describe('prompt messages', () => {
  test('prompt select type of project', async () => {
    const { exitCode, stdout } = await runTest([mainPath], []);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Select the type of project');
  });
  test('prompt select the technology for the project', async () => {
    const { exitCode, stdout } = await runTest([mainPath], [ENTER]);

    expect(exitCode).toBe(0);
    expect(stdout).toMatch(/Select the technology for.*/gm);
  });
  test('prompt select the template of the project', async () => {
    const { exitCode, stdout } = await runTest([mainPath], [ENTER, ENTER]);

    expect(exitCode).toBe(0);
    expect(stdout).toMatch(/Select the template for.*/gm);
  });

  test('prompt introduce the app name', async () => {
    const { exitCode, stdout } = await runTest([mainPath], [ENTER, ENTER, ENTER]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Enter your app name');
  });

  test('prompt app created', async () => {
    const { exitCode, stdout } = await runTest([mainPath], [ENTER, ENTER, ENTER, appNameMock, ENTER]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Finished creating directory');
  });

  test('prompt not avaliable directory', async () => {
    await runTest([mainPath], [ENTER, ENTER, ENTER, appNameMock, ENTER]);
    (async () => {
      const { exitCode, stdout } = await runTest([mainPath], [ENTER, ENTER, ENTER, appNameMock, ENTER]);
      expect(exitCode).toBe(0);
      expect(stdout).toContain('Target directory already exist!');
    })();
  });
});

describe('Passing arguments to main app', () => {
  test('Passing a invalid template', async () => {
    const { stdout } = await execa`node index.js --template no-template ${appNameMock}`;
    expect(stdout).toContain('Invalid Template');
  });

  test('Passing args -t', async () => {
    const { stdout } = await execa`node index.js --t react ${appNameMock}`;
    expect(stdout).toContain('Finished creating directory');
  });

  test('Passing --help', async () => {
    const { stdout } = await execa`node index.js --help`;
    expect(stdout).toContain('Usage: mk-app [OPTION]... [DIRECTORY]');
  });

  test('Passing -h', async () => {
    const { stdout } = await execa`node index.js -h`;
    expect(stdout).toContain('Usage: mk-app [OPTION]... [DIRECTORY]');
  });
});
