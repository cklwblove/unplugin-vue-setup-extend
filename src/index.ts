import { createUnplugin } from 'unplugin'

import { parse, compileScript } from '@vue/compiler-sfc'
import MagicString from 'magic-string'
import { Options } from './types'

function supportScriptName(code: string, id: string) {
  let s: MagicString | undefined
  const str = () => s || (s = new MagicString(code))
  const { descriptor } = parse(code)
  if (!descriptor.script && descriptor.scriptSetup) {
    const result = compileScript(descriptor, { id })
    const name = result.attrs.name
    const lang = result.attrs.lang
    if (name) {
      str().appendLeft(
        0,
        `<script ${lang ? `lang="${lang}"` : ''}>
import { defineComponent } from 'vue'
export default defineComponent({
  name: '${name}',
})
</script>\n`,
      )
    }
    return {
      map: str().generateMap(),
      code: str().toString(),
    }
  }
  return null
}

export default createUnplugin<Options>((options = {}) => ({
  name: 'unplugin-vue-setup-extend',
  enforce: 'pre',
  transformInclude(id) {
    return /\.vue$/.test(id) || /\.vue\?vue/.test(id)
  },
  async transform(code, id) {
    const { name = true } = options
    if (name)
      return supportScriptName.call(this, code, id)

    return null
  },
}))
