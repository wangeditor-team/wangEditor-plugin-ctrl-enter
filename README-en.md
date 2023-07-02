# wangEditor plugin - ctrl+enter insertBreak

[中文文档](./README.md)

## Introduction

Use `ctrl+enter` or `cmd+enter` to insertBreak in [wangEditor](https://www.wangeditor.com/en/).

## Installation

```sh
yarn add @wangeditor/plugin-ctrl-enter
```

## Usage

You should register plugin before create editor, and register only once (not repeatedly).

```js
import { Boot } from '@wangeditor/editor'
import ctrlEnterModule from '@wangeditor/plugin-ctrl-enter'

Boot.registerModule(ctrlEnterModule)

// Then create editor and toolbar
```


## Notice
After installation, the enter newline will be automatically replaced with ctrl+enter newline if you want to customize the function to turn on or off in different use cases

```js
//use this config ,you can 
const editorConfig.EXTEND_CONF={
    ctrlenterable:false
}
```
