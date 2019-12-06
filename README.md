# UI Components Library

Build and upload ReactJS components to NPM

![npm bundle size](https://img.shields.io/bundlephobia/min/ui-x-library) ![](https://img.shields.io/npm/l/ui-x-library) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Rationale

In essence, this application allows you to build UI components in isolation - meaning you can build and preview them independently from any particular brand. At the same time, it creates a `dist` folder ready to be pushed to the NPM using a few familiar commands.

### Project Structure

| Name             | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| **.vscode**      | Contains VS Code specific settings                             |
| **dist**         | Contains built output for the NPM registry                     |
| **node_modules** | Contains all npm dependencies                                  |
| **preview**      | React application that runs `ui-library` components folder     |
| .eslintrc        | Config settings for ESLint code style checking                 |
| .gitignore       | Contain patterns that should be ignored in Git                 |
| .npmignore       | File to keep stuff out of your `dist` package                  |
| .npmrc           | Contains config settings for the NPM                           |
| .prettierrc      | Prettier configuration file                                    |
| package.json     | File that or orchestrates this project                         |
| README.md        | File you are reading right now                                 |
| rollup.config.js | Rollup bundler configuration file, creates `dist` folder       |
| tsconfig.json    | Config settings for compiling code written in TypeScript       |
| yarn.lock        | Auto-generated file to get consistent installs across machines |

### Building and Running

Install all required dependencies:

```
yarn
```

Generate NPM `dist` package using Rollup (significantly faster):

```
yarn build
```

\*Experimental - Generate NPM `dist` package using TypeScript:

```
yarn build-tsc
```

Generates `dist` folder and starts preview app on PORT:9999 in watch mode:

```
yarn dev
```

\*TODO - run tests:

```
yarn test
```

### Versioning

| Npm Script      | Description                           |
| --------------- | ------------------------------------- |
| `version:patch` | Bump version in package.json -> patch |
| `version:minor` | Bump version in package.json -> minor |
| `version:major` | Bump version in package.json -> major |

### Changelogs

Use a `CHANGELOG` markdown file to keep changes of repository in an ordered and structured way.

Recommended template to use for each bullet of the changelog.

```markdown
## [1.0.0] - YYYY-MM-DD

### Changes

- commit message
```
