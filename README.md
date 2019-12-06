# UI Components Library

Build and upload ReactJS components to NPM

![npm bundle size](https://img.shields.io/bundlephobia/min/ui-x-library) ![](https://img.shields.io/npm/l/ui-x-library) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Rationale

In essence, this application allows you to build UI components in isolation - meaning you can build and preview them independently from any particular brand. At the same time, it creates a `dist` folder ready to be pushed to the NPM using a few familiar commands.

## Project Structure

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

## Features

## Pre-Requisites

## Usage

## Testing

> TODO: Add testing facility
