const fs = require('fs')

// access 操作权限
// fs.access('data.txt', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('有操作权限')
//   }
// })

// stat 文件属性
// fs.stat('data.txt', (err, statObj) => {
//   console.log(statObj.size)
//   console.log(statObj.isFile())
//   console.log(statObj.isDirectory())
// })

// mkdir 创建文件夹
// 默认只能创建一层文件夹，如果要创建多层，传递第二个参数{ recursive: true }
// fs.mkdir('a/b/c', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('创建成功')
//   }
// })

// rmdir/rm 删除文件夹
// 默认只能删除一层空文件夹，如果要删除多层或者带文件的，传递第二个参数 { recursive: true }
// fs.rm('a', { recursive: true }, (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('删除成功')
//   }
// })

// readdir 读取文件夹
// fs.readdir('a/b', (err, files) => {
//   console.log(files)
// })

// unlink 删除文件夹
// fs.unlink('a/b/b.txt', (err) => {
//   if (!err) {
//     console.log('删除成功')
//   }
// })