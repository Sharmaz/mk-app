<div align="center">
<h1>mk-app</h1>
<p>
<img src="https://raw.githubusercontent.com/Sharmaz/mk-app/main/media/mk-app-logo.svg" width="500" alt="mk-app logo"/>
</p>
<p>
A quick way to start your web applications.
</p>
</div>

<p align="center">
<a href="https://www.npmjs.com/package/@sharmaz/mk-app"><img src="https://img.shields.io/npm/v/%40sharmaz%2Fmk-app?logo=npm&color=blue" alt="version"></a>
<a href="https://github.com/Sharmaz/mk-app/actions/workflows/unit_tests.yml"><img src="https://img.shields.io/github/actions/workflow/status/Sharmaz/mk-app/unit_tests.yml?logo=jest&label=Tests" alt="tests"></a>
<a href="https://github.com/Sharmaz/mk-app/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Sharmaz/mk-app" alt="license"></a>
</p>

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

<p>
<img src="https://raw.githubusercontent.com/Sharmaz/mk-app/main/media/mk-app-prompt.gif"  width="100%"  alt="mk-app prompt"/>
</p>

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

<p>
<img src="https://raw.githubusercontent.com/Sharmaz/mk-app/main/media/mk-app-options.gif"  width="100%"  alt="mk-app options"/>
</p>

### Template List
| TEMPLATE | DESCRIPTION |
| :------- | :---------- |
| **vanilla-js**            | Vanilla JS + Vite. |
| **minimal-react**         | React + Vite. |
| **react-tw**              | React + Vite + Tailwind CSS. |
| **react-dev**             | React + Vite + Tailwind CSS + ESlint 8 + React Testing Library. |
| **minimal-react-wp**      | React + Webpack. |
| **react-dev-webpack**     | React + Webpack + Tailwind CSS + ESlint 8 + React Testing Library. |
| **react-ts**              | React + Vite + TypeScript + ESlint 8. |
| **react-dev-ts**          | React + Typescript + Vite + Tailwind CSS + ESlint 8 + React Testing Library. |
| **react-next**            | React 19 + Farm + Oxlint. |
