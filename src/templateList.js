import colors from './utils/colors';

const templates = [
  {
    value: 'vanilla-js',
    title: colors.vanilla('Vanilla JS'),
    description: colors.error('Vanilla JS + Vite.'),
  },
  {
    value: 'minimal-react',
    title: colors.react('Minimal React'),
    description: colors.error('React + Vite.'),
  },
  {
    value: 'minimal-react-wp',
    title: colors.webpack('Minimal React Webpack'),
    description: colors.error('React + Webpack.')
  },
  {
    value: 'react-tw',
    title:  colors.react('React Tailwind CSS'),
    description: colors.error('React + Vite + Tailwindcss.'),
  },
  {
    value: 'react-ts',
    title:  colors.typescript('React TypeScript'),
    description: colors.error('React + Vite + TypeScript + ESlint.'),
  },
  {
    value: 'react-ex',
    title:  colors.experimental('React Experimental'),
    description: colors.error('React 19 + Farm + Oxlint.'),
  },
  {
    value: 'react-dev',
    title:  colors.react('React Dev'),
    description: colors.error('React + Vite + Tailwind CSS + ESlint + Jest + React Testing Library.'),
  },
  {
    value: 'react-dev-ts',
    title:  colors.typescript('React Dev Typescript'),
    description: colors.error('React + Vite + TypeScript + Tailwind CSS + ESlint + Jest + React Testing Library.'),
  },
  {
    value: 'react-dev-rolldown',
    title: colors.rust('React Dev Rolldown'),
    description: colors.error('React + Vite (Rolldown) + Tailwind CSS + ESlint + Jest + React Testing Library.'),
  },
  {
    value: 'react-dev-webpack',
    title: colors.webpack('React Dev Webpack'),
    description: colors.error('React + Webpack + Tailwind CSS + ESlint + Jest + React Testing Library.')
  },
  {
    value: 'vue-js',
    title:  colors.vue('Vue'),
    description: colors.error('Vue + Vite'),
  },
  {
    value: 'node-express',
    title:  colors.node('Node Express'),
    description: colors.error('Node + Express + Jest + Eslint.'),
  }
];

export default templates;
