import { expect, beforeAll, afterEach, describe } from '@jest/globals';
import { rm } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { execa } from 'execa';
import app from '../../src/index';
import { appNameMock, genPath } from '../__mocks__/dataMock';


beforeAll(() => rm(genPath, { recursive: true, force: true }));
afterEach(() => rm(genPath, { recursive: true, force: true }));

describe('Passing arguments to main app', () => {
  test('Passing template and directory', () => {
    const args = { _: [ appNameMock ], template: 'react' };
    app(args);

    const packageJson = readFileSync(`${genPath}/package.json`, 'utf8');
    expect(packageJson).toContain(appNameMock);
  });

  test('Passing template without directory', () => {
    const args = { _: [], template: 'react' };
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

    expect(result).toContain('Usage: create-enchilada [OPTION]... [DIRECTORY]');
  });

  test('Passing a invalid template', async () => {
    const { stdout } = await execa`node index.js --template no-template ${appNameMock}`;
    console.log(stdout);
    expect(stdout).toContain('Invalid Template');
  });
});
