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
    title: colors.react('Minimal React Webpack'),
    description: colors.error('React + Webpack.')
  },
  {
    value: 'react-tw',
    title:  colors.react('React Tailwind CSS'),
    description: colors.error('React + Vite + Tailwindcss.'),
  },
  {
    value: 'react-dev',
    title:  colors.react('React Tailwind CSS, Linter and Testing'),
    description: colors.error('React + Vite + Tailwind CSS + ESlint 8 + ESlint Airbnb + Jest + React Testing Library.'),
  },
  {
    value: 'react-ts',
    title:  colors.typescript('React TypeScript'),
    description: colors.error('React + Vite + TypeScript + ESlint 8.'),
  },
  {
    value: 'react-dev-ts',
    title:  colors.typescript('React TypeScript, Tailwind CSS, Linter and Testing'),
    description: colors.error('React + Vite + TypeScript + Tailwind CSS + ESlint 8 + Jest + React Testing Library.'),
  },
  {
    value: 'react-next',
    title:  colors.error('React Experimental'),
    description: colors.error('React 19 + Farm + Oxlint.'),
  }
];

export default templates;
