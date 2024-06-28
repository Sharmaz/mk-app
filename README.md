# mk-app
A quick way to start your web applications.

## Install
```
npm install -g @sharmaz/mk-app
```

## Usage
```
mk-app
```
or
```
npx @sharmaz/mk-app
```

## CLI Options
### Help:
```
mk-app --help
```
or
```
mk-app -h
```
### Template:
```
mk-app --template [template-name] [app-name]
```
or
```
mk-app -t [template-name] [app-name]
```
E.g:
```
mk-app --template react-ts my-app
```
### Template List
| TEMPLATE | DESCRIPTION |
| :------- | :---------- |
| **vanilla-js**            | Vanilla JS + Vite. |
| **minimal-react**         | React + Vite. |
| **react-tw**              | React + Vite + Tailwind CSS. |
| **react-tw-lint-test**    | React + Vite + Tailwind CSS + ESlint 8 + React Testing Library |
| **react-ts**              | React + Vite + TypeScript + ESlint 8. |
