import { expect, beforeAll, afterEach, describe } from '@jest/globals';
import * as url from 'url';
import { join } from 'node:path';
import fs from 'fs-extra';
import { execa, execaSync } from 'execa';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const mainPath = join(dirname, '..');
const appNameMock = 'react-test-app';
const genPath = join(dirname, appNameMock);

beforeAll(() => fs.remove(genPath));
afterEach(() => fs.remove(genPath));

describe('prompt messages', () => {
  test('prompt initial', async () => {
    const { stdout } = await execaSync`node ${mainPath}`;
    expect(stdout).toContain('Select your setup');
  });
  test('prompt template selected', async () => {
    const { stdout } = await execa({input: 'minimal react app'})`node ${mainPath}`;
    expect(stdout).toContain('Enter your app name');
  });
});
