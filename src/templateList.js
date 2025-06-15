import colors from './utils/colors';
import setColor from './utils/setColor';

const templateCategories = {
  'Frontend': {
    'VanillaJS': [
      {
        value: 'vanilla-js',
        title: setColor('VanillaJS'),
        description: colors.error('Vanilla JS + Vite.'),
      },
    ],
    'React JavaScript': [
      {
        value: 'react',
        title: setColor('React'),
        description: colors.error('React + Vite.'),
      },
      {
        value: 'react-dev',
        title:  setColor('React Dev'),
        description: colors.error('Tailwind + Linter + Tests'),
      },
      {
        value: 'react-webpack',
        title: setColor('React Webpack'),
        description: colors.error('React + Webpack.')
      },
      {
        value: 'react-dev-webpack',
        title: setColor('React Dev Webpack'),
        description: colors.error('Tailwind + Linter + Tests')
      },
    ],
    'React TypeScript': [
      {
        value: 'react-typescript',
        title:  setColor('React TypeScript'),
        description: colors.error('React + Vite + TypeScript'),
      },
      {
        value: 'react-dev-typescript',
        title:  setColor('React Dev TypeScript'),
        description: colors.error('Tailwind + Linter + Tests'),
      },
    ]
  },
  'Backend': {
    'NodeJS': [
      {
        value: 'node-express',
        title:  setColor('Node Express'),
        description: colors.error('Node + Express + Jest + Eslint.'),
      }
    ]
  }
}

export default templateCategories;
