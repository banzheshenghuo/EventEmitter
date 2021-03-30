<h1 align="center">Welcome to EventEmitter 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/eventemitter" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/eventemitter.svg">
  </a>
  <a href="https://github.com/banzheshenghuo/EventEmitter#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/banzheshenghuo/EventEmitter/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

> 一个简单的 EventEmitter

### 🏠 [首页](https://github.com/banzheshenghuo/EventEmitter#readme)

## 安装

```sh
npm install @antan/eventemitter
```

## API

```js
const emitter = new EventEmitter(isStrict: boolean);
```

isStrict 默认为false，用于on和off方法中判断是否相同监听器。

- false 按照引用判断是否相同
- true 调用toString后根据生成的字符串判断是否相同

### on

添加事件监听器

```js
emitter.on(eventName: string | Symbol, listener: Function)
```

### emit

触发事件

```js
emitter.emit(eventName: string | Symbol, data: any)
```

### off

删除事件监听器

```js
emitter.off(eventName: string | Symbol, listener: Function)
```

### allOff

删除指定时间类型的所有事件监听器

```js
emitter.allOff(eventName: string | Symbol)
```

## Author

👤 **banzheshenghuo**

* Github: [@banzheshenghuo](https://github.com/banzheshenghuo)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_