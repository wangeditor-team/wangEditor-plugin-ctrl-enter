/**
 * @description examples entry
 * @author wangfupeng
 */

import { createEditor, createToolbar, Boot } from '@wangeditor/editor'
import withCtrlEnter from '../src/index'

// 注册插件
Boot.registerPlugin(withCtrlEnter)

// 创建编辑器1
let editor = createEditor({
    selector: '#editor-container'
})

// 创建工具栏1
const toolbar1 = createToolbar({
    editor,
    selector: '#toolbar-container'
})
