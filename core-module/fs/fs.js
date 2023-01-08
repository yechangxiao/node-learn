const path = require('path')
const fs = require('fs')

// readFile 一次性将整个文件写入内存，区别read
// fs.readFile(path.resolve(__dirname, 'data.txt'), 'utf-8', (err, data) => {
//   console.log(err)
//   console.log(data)
// })

// writeFile
// 相对路径为当前工作目录，不是当前执行的目录
// fs.writeFile('data.txt', '你好 世界', (err) => {
//   if (!err) {
//     fs.readFile('data.txt', 'utf-8', (err, data) => {
//       console.log(data)
//     })
//   }
// })

// fs.writeFile('data.txt', '111', {
//   mode: 438,
//   // 通过权限位设置，不清空当前内容，在前面写入
//   flag: 'r+',
//   encoding: 'utf-8'
// }, (err) => {
//   if (!err) {
//     fs.readFile('data.txt', 'utf-8', (err, data) => {
//       console.log(data)
//     })
//   }
// })

// appendFile
// fs.appendFile('data.txt', '2333', (err) => {
//   console.log('写入成功')
// })

// copyFile
// fs.copyFile('data.txt', 'test.txt', (err) => {
//   console.log('拷贝成功')
// })

// watchFile
fs.watchFile('data.txt', { interval: 20 }, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    console.log('文件被修改了')
    fs.unwatchFile('data.txt')
  }
})