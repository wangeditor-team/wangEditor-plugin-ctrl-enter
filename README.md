# wangEditor plugin ctrl+enter insertBreak

Use `ctrl+enter` or `meta+enter` to insertBreak for [wangEditor](https://www.wangeditor.com/v5/en/).

```js
import { Boot } from '@wangeditor/editor'
import withCtrlEnter from '@wangeditor/plugin-ctrl-enter'

Boot.registerPlugin(withCtrlEnter)

// Then create editor and toolbar
```
