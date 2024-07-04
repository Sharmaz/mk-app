import { afterEach, beforeEach, describe } from '@jest/globals';
import { mkdirSync, readdirSync, rmSync } from 'node:fs';

import copyFilesAndDirectories from '../../src/templateCopy';
import { sourcePath, genPath } from '../__mocks__/dataMock';

beforeEach(() => mkdirSync(genPath, { recursive: true }));
afterEach(() => rmSync(genPath, { recursive: true, force: true }));

describe('Copying Files', () => {
  test('Copying template files to directory', () => {
    copyFilesAndDirectories(sourcePath, genPath);
    const templateFiles = readdirSync(genPath);
  
    expect(templateFiles.length).toBeGreaterThan(1);
  });
});
