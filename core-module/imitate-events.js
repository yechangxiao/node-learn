function MyEvent() {
  // 缓存订阅者信息
  this._events = Object.create(null)
}

MyEvent.prototype.on = function (type, callback) {
  if (this._events[type]) {
    this._events[type].push(callback)
  } else {
    this._events[type] = [callback]
  }
}

MyEvent.prototype.once = function (type, callback) {
  const foo = function (...args) {
    callback.call(this, ...args)
    this.off(type, foo)
  }
  foo.link = callback
  this.on(type, foo)
}

MyEvent.prototype.off = function (type, callback) {
  if (this._events[type]) {
    this._events = this._events[type].filter(item => {
      return item !== callback && item.link !== callback
    })
  }
}

MyEvent.prototype.emit = function (type, ...args) {
  if (this._events[type]) {
    this._events[type].forEach(callback => {
      callback.call(this, ...args)
    })
  }
}

let ev = new MyEvent()

let fn = function (...data) {
  console.log('事件1', data)
}
// 测试on/emit
// ev.on('事件1', fn)
// ev.on('事件1', () => {
//   console.log('事件1     233')
// })
// ev.emit('事件1', 1, 2)
// ev.emit('事件1', 1, 2)

// 测试off
// ev.on('事件1', fn)
// ev.emit('事件1', 1)
// ev.off('事件1', fn)
// ev.emit('事件1', 2)

// 测试once
ev.once('事件1', fn)
ev.off('事件1', fn)
// ev.emit('事件1', 1)
ev.emit('事件1', 2)

