# wangEditor 插件 - ctrl+enter 换行

[English documentation](./README-en.md)

## 介绍

在 [wangEditor](https://www.wangeditor.com/) 中使用 `ctrl+enter` 或 `cmd+enter` 换行。

## 安装

```sh
yarn add @wangeditor/plugin-ctrl-enter
```

## 使用

要在创建编辑器之前注册，且只能注册一次，不可重复注册。

```js
import { Boot } from '@wangeditor/editor'
import ctrlEnterModule from '@wangeditor/plugin-ctrl-enter'

Boot.registerModule(ctrlEnterModule)

// Then create editor and toolbar

```
## 注意
在安装之后会自动将enter换行替换为使用 ctrl+enter 换行
如果你想在不同的使用场景自定义的开启或者关闭该功能

```js
//使用ctrlenterable 来控制功能的开启或者关闭 默认是开启的
// https://www.wangeditor.com/v5/editor-config.html#extend-conf
 editorConfig.EXTEND_CONF={
    //... other config,
    ctrlenterable:false//true
}
```
