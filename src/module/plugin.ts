/**
 * @description plugin
 * @author wangfupeng
 */

import { DomEditor, IDomEditor } from '@wangeditor/editor'

function withCtrlEnter<T extends IDomEditor>(editor: T) {
  const { getConfig } = editor
  const newEditor = editor

  setTimeout(() => {
    // beforeInput 事件不能识别 ctrl+enter ，所以自己绑定 DOM 事件
    const { $textArea } = DomEditor.getTextarea(newEditor)
    if ($textArea == null) return
    $textArea.on('keydown', e => {
      const event = e as KeyboardEvent
      const isEnter = event.key === 'Enter'
      const isCtrl = event.ctrlKey || event.metaKey
      // 如果在EXTEND_CONF设置了ctrl:true 那么只能通过ctrl+enter 来进行换行
      // 移除默认情况下只按enter就换行的情况
      // 兼容插件功能安装后默认开启，如果想依然使用enter换行那么设置在EXTEND_CONF:{ctrlenterable:false}
      const { ctrlenterable = true } = getConfig().EXTEND_CONF ?? {}
      if (isEnter && ctrlenterable) {
        event.preventDefault()
        isCtrl && newEditor.insertBreak()
      }
    })
  })
  return newEditor
}

export default withCtrlEnter
