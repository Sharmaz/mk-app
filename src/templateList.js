import { colors, setColor, separator, setUnderlineOff} from './utils/colors';

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
        title: `${setColor('React')}${separator('React')}${setUnderlineOff(colors.error('React + Vite.'))}`,
      },
      {
        value: 'react-dev',
        title:  `${setColor('React Dev')}${separator('React Dev')}${setUnderlineOff(colors.error('Tailwind + Linter + Tests'))}`,
      },
      {
        value: 'react-webpack',
        title: `${setColor('React Webpack')}${separator('React Webpack')}${setUnderlineOff(colors.error('React + Webpack.'))}`,
      },
      {
        value: 'react-dev-webpack',
        title: `${setColor('React Dev Webpack')}${separator('React Dev Webpack')}${setUnderlineOff(colors.error('Tailwind + Linter + Tests'))}`,
      },
    ],
    'React TypeScript': [
      {
        value: 'react-typescript',
        title:  `${setColor('React TypeScript')}${separator('React TypeScript')}${setUnderlineOff(colors.error('React + Vite + TypeScript'))}`,
      },
      {
        value: 'react-dev-typescript',
        title:  `${setColor('React Dev TypeScript')}${separator('React Dev TypeScript')}${setUnderlineOff(colors.error('Tailwind + Linter + Tests'))}`,
      },
    ]
  },
  'Backend': {
    'NodeJS': [
      {
        value: 'node-express',
        title:  `${setColor('Node Express')}${separator('Node Express')}${setUnderlineOff(colors.error('Express + Linter + Tests'))}`,
      },
    ]
  }
}

export default templateCategories;
