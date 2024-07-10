const helpMessage = `
Usage: mk-app [OPTION]... [DIRECTORY]

Create a new app. With no arguments,
starting the CLI in interactive mode.

Options:
  directory                 The project's name in the current directory,
                            e.g., my-app, would be like ./my-app/
                            the directory should not exist.
  -t, --template NAME       Use a specific template.
  -h, --help                Display a help message, and exit.

Available templates:
  vanilla-js                Vanilla JS + Vite.
  minimal-react             React + Vite.
  react-tw                  React + Vite + Tailwind CSS.
  react-dev                 React + Vite + Tailwind CSS + ESlint 8 + React Testing Library.
  minimal-react-wp          React + Webpack.
  react-dev-webpack         React + Webpack + Tailwind CSS + ESlint 8 + React Testing Library
  react-ts                  React + Vite + TypeScript + ESlint 8.
  react-dev-ts              React + Typescript + Vite + Tailwind CSS + ESlint 8 + React Testing Library.
  react-next                React 19 + Farm + Oxlint.
`;
export default helpMessage;
