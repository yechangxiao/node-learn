const fs = require('fs')

// 有了read和write就有了大文件进行边读边写的操作，就不用一次将文件内容全部读入内存中进行操作了
// read 所谓的读操作就是将数据从磁盘文件中文件写入buffer中，不同于readFile，这是一次将整个文件写入内存
let buf = Buffer.alloc(10)

/**
 * rfd 定位当前被打开的文件
 * buf 用于表示当前缓存区
 * offset 表示从buf的哪个位置开始执行写入
 * length 表示当次写入的长度
 * position 表示当前从文件的哪个位置开始读取
*/
fs.open('data.txt', 'r', (err, rfd) => {
  console.log(rfd)
  fs.read(rfd, buf, 1, 4, 1, (err, readBytes, data) => {
    console.log(readBytes, data, data.toString())
  })
})

// write 将缓存区中的内容写入磁盘文件中
buf = Buffer.from('1234567890')
fs.open('data1.txt', 'w', (err, wfd) => {
  fs.write(wfd, buf, 1, 4, 0, (err, written) => {
    console.log(written)
    fs.close(wfd)
  })
})