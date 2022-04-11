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
