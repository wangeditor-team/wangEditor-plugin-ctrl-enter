/**
 * @description examples entry
 * @author wangfupeng
 */

import { createEditor, createToolbar, Boot } from '@wangeditor/editor'
import module from '../src/index'

// 注册插件
Boot.registerModule(module)

// 创建编辑器1
const editor = createEditor({
  selector: '#editor-container',
  config: {
    onChange(editor) {
      const html = editor.getHtml()
      // @ts-ignore
      document.getElementById('text-html').value = html
      const contentStr = JSON.stringify(editor.children, null, 2)
      // @ts-ignore
      document.getElementById('text-json').value = contentStr
    },
  },
})

// 创建工具栏1
const toolbar = createToolbar({
  editor,
  selector: '#toolbar-container',
})

// @ts-ignore 为了便于调试，暴露到 window
window.editor = editor
// @ts-ignore
window.toolbar = toolbar
