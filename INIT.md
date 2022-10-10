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

### 代码提交规范

pnpm add -D commitizen cz-conventional-changelog @commitlint/config-conventional @commitlint/cli commitlint-config-cz cz-customizable

安装 husky

1.安装
pnpm add husky lint-staged -D

2.生成 .husky 的文件夹
npx husky install

3.添加 hooks，会在 .husky 目录下生成一个 pre-commit 脚本文件
npx husky add .husky/pre-commit "npx --no-install lint-staged"

4.添加 commit-msg
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

5. 使用 `git commit -m "message"` 就会看到 hook 生效了。
