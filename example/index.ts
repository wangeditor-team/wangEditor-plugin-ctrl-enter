/**
 * @description examples entry
 * @author wangfupeng
 */

import { createEditor, createToolbar, IEditorConfig, Boot } from '@wangeditor/editor'
import withCtrlEnter from '../src/index'

const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容',
}

// 创建编辑器1
let editor = createEditor({
    selector: '#editor-container',
    content: [],
    config: editorConfig
})
editor = withCtrlEnter(editor) // 使用插件

// 创建工具栏1
const toolbar1 = createToolbar({
    editor,
    selector: '#toolbar-container'
})
