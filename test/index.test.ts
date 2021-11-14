/**
 * @description index test
 * @author wangfupeng
 */

import { createEditor } from "@wangeditor/editor"
import withCtrlEnter from "../src/index"

describe("withCtrlEnter", () => {
    it("withCtrlEnter", () => {
        const editor = withCtrlEnter(createEditor({ selector: "body" }))
        expect(editor).not.toBeNull()
    })
})
