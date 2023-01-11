const fs = require('fs')

let buf = Buffer.alloc(10)

const BUFFER_SIZE = buf.length
let readOffset = 0

// 相对路径为当前执行的路径，需要进入具体的文件夹中
fs.open('data.txt', 'r', (err, rfd) => {
  fs.open('data1.txt', 'a+', (err, wfd) => {
    function next() {
      fs.read(rfd, buf, 0, BUFFER_SIZE, readOffset, (err, readBytes) => {
        if (!readBytes) {
          fs.close(rfd, () => {})
          fs.close(wfd, () => {})
          console.log('拷贝完成')
          return
        }
        readOffset += readBytes
        fs.write(wfd, buf, 0, readBytes, (err, written) => {
          next()
        })
      })
    }
    next()
  })
})