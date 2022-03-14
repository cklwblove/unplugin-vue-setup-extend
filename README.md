# unplugin-vue-setup-extend

[![NPM version](https://img.shields.io/npm/v/@winner-fed/unplugin-vue-setup-extend?color=a1b858&label=)](https://www.npmjs.com/package/@winner-fed/unplugin-vue-setup-extend)

Support `<script name>` for Vue script setup.

## Install

**node version:** >=12.0.0

**vite version:** >=2.0.0

```bash
npm i unplugin-vue-setup-extend -D
# or
yarn add unplugin-vue-setup-extend -D
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import vueSetupExtend from '@winner-fed/unplugin-vue-setup-extend/vite'

export default defineConfig({
  plugins: [
    vueSetupExtend({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import vueSetupExtend from '@winner-fed/unplugin-vue-setup-extend/rollup'

export default {
  plugins: [
    vueSetupExtend({ /* options */ }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('@winner-fed/unplugin-vue-setup-extend/webpack').default({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default {
  buildModules: [
    ['@winner-fed/unplugin-vue-setup-extend/nuxt', { /* options */ }],
  ],
}
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('@winner-fed/unplugin-vue-setup-extend/webpack').default({ /* options */ }),
    ],
  },
}
```

<br></details>
 
## Note
当 `script` 标签里不存在任何代码时，`@vue/compiler-sfc` 转换后的 `scriptSetup` 为 `null`，此种情况不支持转换。

```javascript
 const { parse, compileScript } = require("@vue/compiler-sfc");

const { descriptor } = parse(
`
<template><h1>12312312</h1></template>
<script setup name="App"></script>
`
);

console.log(descriptor);

```

`descriptor` 转换后的结果如下：

```javascript
{
  filename: 'anonymous.vue',
  source: '\n' +
    '  <template><h1>12312312</h1></template><script setup name="App"></script>\n',
  template: {
    type: 'template',
    content: '<h1>12312312</h1>',
    loc: { source: '<h1>12312312</h1>', start: [Object], end: [Object] },
    attrs: {},
    ast: {
      type: 1,
      ns: 0,
      tag: 'template',
      tagType: 0,
      props: [],
      isSelfClosing: false,
      children: [Array],
      loc: [Object],
      codegenNode: undefined
    },
    map: {
      version: 3,
      sources: [Array],
      names: [],
      mappings: 'AACA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC',
      file: 'anonymous.vue',
      sourceRoot: '',
      sourcesContent: [Array]
    }
  },
  script: null,
  scriptSetup: null,
  styles: [],
  customBlocks: [],
  cssVars: [],
  slotted: false,
  shouldForceReload: [Function: shouldForceReload]
}
```
