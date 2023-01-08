const fs = require('fs')
const path = require('path')

// open
fs.open(path.resolve('data.txt'), 'r', (err, fd) => {
  // 涉及文件的标识符和文件描述符
  console.log(fd)
})

// close
fs.open(path.resolve('data.txt'), 'r', (err, fd) => {
  console.log(fd)
  fs.close(fd, err => {
    if (!err) {
      console.log('关闭成功')
    }
  })
})