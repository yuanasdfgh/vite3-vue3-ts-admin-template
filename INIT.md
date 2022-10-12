# vue3 + Ts 项目初始化

## 创建项目

```
 pnpm create vite
```

pnpm add @types/node -D

## 代码质量风格

### 集成 eslint

pnpm add eslint -D // eslint 本体
pnpm add eslint-plugin-vue -D // vue 官方配置

pnpm add @typescript-eslint/eslint-plugin @typescript-eslint/parser -D// 增加对 ts 的支持

pnpm add -D eslint eslint-plugin-vue @vue/eslint-config-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser

pnpm add vite-plugin-eslint -D

### 集成 prettier

pnpm add prettier eslint-config-prettier eslint-plugin-prettier -D // 添加 eslint 的 prettier 插件

pnpm add -D prettier @vue/eslint-config-prettier

"lint": "eslint --ext .js,.vue,.ts src --fix",
"lint": "eslint --fix src/_.{ts,vue} && eslint --fix src/\*\*/_.{ts,vue}",

## 集成 pinia

pnpm add pinia

## 集成 vue-router

pnpm add vue-router

## 其他集成

pnpm add vue-request axios @vueuse/core

pnpm add -D sass vite-plugin-mock

## 自动导入集成

### api

pnpm add unplugin-auto-import -D

### components

pnpm add unplugin-vue-components -D

## UI 框架

pnpm add -D naive-ui

## unocss 以及预设

pnpm add -D unocss @unocss/preset-uno @unocss/preset-attributify @unocss/preset-icons

## icones 图标库

pnpm add -D @iconify/json
