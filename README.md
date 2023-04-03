# vue3-template

海澜智云前端组 Vue3 前端基础架构

技术栈：
Vue3 + TypeScript + Vue-Router + Pinia

基础依赖：
Lodash， Echarts， Element-plus，moment，mockjs

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

[WebStorm](https://www.jetbrains.com/webstorm/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## 项目配置

```sh
npm install
```

### 本地启动（默认Dev环境）

```sh
npm run dev
```

### 项目构建【env指环境配置文件】

```sh
npm run build:{env} 
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint:eslint
```

### Lint with [Prettier]

```sh
npm run lint:prettier
```
