module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:prettier/recommended',
        'prettier', // eslint-config-prettier 的缩写
    ],
    // parser: 'vue-eslint-parser', // 指定要使用的解析器
    // // 给解析器传入一些其他的配置参数
    // parserOptions: {
    //     ecmaVersion: 12, // 支持的es版本
    //     parser: '@typescript-eslint/parser',
    //     sourceType: 'module', // 模块类型，默认为script，我们设置为module
    // },

    //plugins: ['vue', '@typescript-eslint', 'prettier'], // eslint-plugin- 可以省略

    rules: {
        //关闭名称校验
        'vue/multi-word-component-names': 'off',
    },
};
