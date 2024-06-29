import { existsSync, mkdirSync } from 'fs';
import copyFilesAndDirectories from './templateCopy';
import renamePackageJsonName from './templateRenameName';
import colors from './utils/colors';

async function initialize(sourcePath, destinationPath, name) {
  const isValidTemplate = existsSync(sourcePath);
  const isDestinationPath = existsSync(destinationPath);

  if (!isValidTemplate) { console.log(colors.error('Invalid Template')); }
  if (isDestinationPath) { console.log(colors.error('Target directory already exist!')); }

  if (isValidTemplate && !isDestinationPath) {
    console.info(`📂 ${colors.ok('Target directory doesn\'t exist')}`);
    console.info(`🚧 ${colors.ok('Creating directory')}`);
    mkdirSync(destinationPath, { recursive: true });
    console.info(`📁 ${colors.ok('Finished creating directory')}`);
    copyFilesAndDirectories(sourcePath, destinationPath);
    renamePackageJsonName(destinationPath, name);
    console.info(`🚀 ${colors.ok(`Finished generating your app ${colors.error(name)}`)}`);
    console.info(`🏠 ${colors.info(`cd ${name}`)}`);
    console.info(`🧪 ${colors.info('npm install')}`);
  }
}

export default initialize;
