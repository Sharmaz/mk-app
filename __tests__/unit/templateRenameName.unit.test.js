import { afterEach, beforeEach, describe } from '@jest/globals';
import { mkdirSync, readFileSync, rmSync } from 'node:fs';

import copyFilesAndDirectories from '../../src/templateCopy';
import renamePackageJsonName from '../../src/templateRenameName';
import { appNameMock, sourcePath, genPath } from '../__mocks__/dataMock';

beforeEach(() => mkdirSync(genPath, { recursive: true }));
afterEach(() => rmSync(genPath, { recursive: true, force: true }));

describe('App name in package.json', () => {
  test('Changing the app name in template package.json file', () => {
    copyFilesAndDirectories(sourcePath, genPath);
    renamePackageJsonName(genPath, appNameMock);
  
    const packageJson = readFileSync(`${genPath}/package.json`, 'utf8');
    expect(packageJson).toContain(appNameMock);
  });
});
