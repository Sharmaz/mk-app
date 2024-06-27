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
  react-tw-lint-test        React + Vite + Tailwind CSS + ESlint 8 + React Testing Library
  react-ts                  React + Vite + TypeScript + ESlint 8.
`;
export default helpMessage;
