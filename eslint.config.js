import js from '@eslint/js';

import pluginVue from 'eslint-plugin-vue';

import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  skipFormatting,
  {
    rules: {
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: '*' },  // インポート文の次に改行
      ],
      'indent': ['error', 2],  // インデントはスペース2つ
      'semi': ['error', 'always'],  // セミコロンを常に使う
      'quotes': ['error', 'single'],  // シングルクォートを使う
      'no-unused-vars': ['warn'],  // 使われていない変数は警告
    },
  },
];
