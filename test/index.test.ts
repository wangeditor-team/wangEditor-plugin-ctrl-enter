/**
 * @description index test
 * @author wangfupeng
 */

import { createEditor } from "@wangeditor/editor";
// import withCtrlEnter from "../src/index";

describe("withCtrlEnter", () => {
    it("withCtrlEnter", () => {
        const editor = createEditor({ selector: "body" });
        expect(editor).not.toBeNull();
    });

    // 测试待补充...先用 demo 代替
    it("demo", () => {
        expect(1).toBe(1);
    });
});
