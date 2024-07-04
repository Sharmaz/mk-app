import * as url from 'url';
import { join } from 'node:path';

import templates from '../../src/templateList';


const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const mainPath = join(dirname, '../..');
const appNameMock = 'react-test-app';
const genPath = join(mainPath, appNameMock);
const sourcePath = join(dirname, `../../templates/${templates[0].value}`);

export { dirname, mainPath, appNameMock, genPath, sourcePath };
