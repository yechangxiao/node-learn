### 在nodejs中，每个文件就是一个模块，文件路径就是模块名。
### 在编写每个模块时，都有require、exports、module.exports三个预先定义好的变量可供使用

### 1.require
- #### require函数用于在当前模块中加载和使用别的模块，传入一个模块名，返回一个导出对象。
- #### 模块名可使用相对路径(./)，或者绝对路径(以/或者C：之类的盘符开头)。模块中的.js扩展名可以省略
```js
// 以下保存的都是同一个模块导出的对象
const foo1 = require('./foo')
const foo2 = require('./foo.js')
const foo3 = require('/home/user/foo')
const foo4 = require('/home/user/foo.js')
```

### 2.exports
- #### exports对象是当前模块的导出对象，用于导出模块的共有方法和属性。
- #### 别的模块通过require函数得到的就是当前模块的exports对象
```js
// a.js
exports.hello = function () {
  console.log('a.js exports')
}

// b.js
const aModule = require('./a')
aModule.hello() // 打印a.js exports
``` 

### 3.module
- #### 通过module对象可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块的当初对象。
- #### 例如：模块导出的默认是个对象，但如果想改成其他类型，可以使用module.exports
```js
// a.js
module.exports = function () {
  console.log('a.js module.exports')
}

// b.js
const aModule = require('./a')
aModule() // 打印a.js module.exports
```

### 模块初始化
### 一个模块中的js代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用
```js
// count.js
let i = 0
exports.count = function () {
  return ++i
}

// main.js
const count1 = require('./count')
const count2 = require('./count') // count.js并没有初始化两次
console.log(count1.count()) // 1
console.log(count2.count()) // 2
console.log(count2.count()) // 3
```