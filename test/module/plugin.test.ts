/**
 * @description plugin test
 * @author wangfupeng
 */

import { createEditor } from '@wangeditor/editor'
import withCtrlEnter from '../../src/module/plugin'

describe('withCtrlEnter', () => {
  it('withCtrlEnter', () => {
    const editor = withCtrlEnter(createEditor({ selector: 'body' }))
    expect(editor).not.toBeNull()
  })
})
