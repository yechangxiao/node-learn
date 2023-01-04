// const b1 = Buffer.alloc(10) // 创建指定字节大小buffer
// const b1 = Buffer.from('中') // 接收数据创建buffer
// const b1 = Buffer.from([1, '中', 3])

// console.log(b1)

// const b1 = Buffer.alloc(3)
// const b2 = Buffer.from(b1)

// console.log(b1)
// console.log(b2)

// b1[0] = 1 // b1和b2两个buffer不会互相影响
// console.log(b1)
// console.log(b2)

/**
 * buffer-实例api
*/
// let buf = Buffer.alloc(6)

// fill-会一直进行填充
// buf.fill('123')
// console.log(buf)
// console.log(buf.toString())

// write-没有填充效果
// buf.write('123')
// console.log(buf)
// console.log(buf.toString())

// toString-读取buffer中内容
// buf = Buffer.from('你好，世界')
// console.log(buf)
// console.log(buf.toString())

// slice-截取内容
// buf = Buffer.from('你好，世界')
// let b1 = buf.slice(3)
// console.log(b1)
// console.log(b1.toString())

// indexOf-查找内容
// buf = Buffer.from('你好，世界')
// console.log(buf)
// console.log(buf.indexOf('好'))

// copy-拷贝
// let b1 = Buffer.alloc(6)
// let b2 = Buffer.from('你好')

// b2.copy(b1) // 将b2拷贝给b1
// console.log(b1.toString())
// console.log(b2.toString())


/**
 * buffer-静态方法
*/
// concat-拼接两个buffer
// let b1 = Buffer.from('你好')
// let b2 = Buffer.from('世界')

// let b = Buffer.concat([b1, b2])
// console.log(b)
// console.log(b.toString())

// isBuffer-是否为buffer
// let b1 = Buffer.from('123')
// let b2 = '123'
// console.log(Buffer.isBuffer(b1))
// console.log(Buffer.isBuffer(b2))