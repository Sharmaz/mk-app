import * as url from 'url';
import { join } from 'node:path';

import templateCategories from '../../src/templateList';


const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const mainPath = join(dirname, '../..');
const appNameMock = 'react-test-app';
const genPath = join(mainPath, appNameMock);
const sourcePath = join(dirname, `../../templates/${templateCategories.Frontend.VanillaJS[0].value}`);

export { dirname, mainPath, appNameMock, genPath, sourcePath };
