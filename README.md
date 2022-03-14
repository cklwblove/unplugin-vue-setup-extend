# unplugin-vue-setup-extend

[![NPM version](https://img.shields.io/npm/v/unplugin-vue-setup-extend?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-vue-setup-extend)

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
import vueSetupExtend from 'unplugin-vue-setup-extend/vite'

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
import vueSetupExtend from 'unplugin-vue-setup-extend/rollup'

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
    require('unplugin-vue-setup-extend/webpack').default({ /* options */ })
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
    ['unplugin-vue-setup-extend/nuxt', { /* options */ }],
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
      require('unplugin-vue-setup-extend/webpack').default({ /* options */ }),
    ],
  },
}
```

<br></details>
