
import prompts from 'prompts';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { argv } from 'node:process';
import minimist from 'minimist';

import templates from './templateList';
import colors from './utils/colors';
import initialize from './initialize';
import { formatAppName, validateAppName } from './utils/appName';
import helpMessage from './utils/helpMessage';

const argsv = minimist(argv.slice(2));

const app = async (args) => {
  const templateArg = args.template;
  const appNameArg = args._[0];
  const { help, h } = args;

  if (help || h) {
    console.info(helpMessage);
    return helpMessage;
  }

  if (!templateArg || !appNameArg) {
    try {
      const response = await prompts([
        {
          type: 'select',
          name: 'template',
          message: colors.typescript('Select your setup'),
          hint: colors.warn('Use arrow-keys. Return to submit.'),
          choices: templates,
        },
        {
          type: 'text',
          name: 'appName',
          message: colors.typescript('Enter your app name'),
          initial: 'my-app',
          format: (val) => formatAppName(val),
          validate: (val) => validateAppName(val),
        },
      ]);

      const { appName, template } = response;
      const targetDirectory = path.join(process.cwd(), appName);
      const sourceDir = path.resolve(
        fileURLToPath(import.meta.url),
        '../../templates',
        `${template}`
      );

      initialize(sourceDir, targetDirectory, appName);
    }
    catch(err) {
      console.error(colors.error(err.message));
    }
  } else {
    try {
      const template = templateArg
      const appName = appNameArg;
      const targetDirectory = path.join(process.cwd(), appName);
      const sourceDir = path.resolve(
        fileURLToPath(import.meta.url),
        '../../templates',
        `${template}`
      );

      initialize(sourceDir, targetDirectory, appName);
    }
    catch(err) {
      console.error(colors.error(err.message));
    }
  }
  return 0;
};

app(argsv);

export default app;
