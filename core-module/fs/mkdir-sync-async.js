const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

/**
 * 1 接收路径类似于a\b\c
 * 2 利用分隔符 \ 将路径进行拆分 ['a', 'b', 'c']
 * 3 对上述数组进行遍历，拿到每一项，然后与前一项进行拼接
 * 4 判断拼接后的路径是否有可操作权限，如果有则存在，没有则执行创建
*/
// function makeDirSync(dirPath) {
//   const items = dirPath.split(path.sep)
//   console.log(items, path.sep);
//   for (let i = 1; i <= items.length; i++) {
//     let dir = items.slice(0, i).join(path.sep)
//     try {
//       fs.accessSync(dir)
//     } catch (error) {
//       fs.mkdirSync(dir)
//     }
//   }
// }

// makeDirSync('a\\b\\c')


// function makeDir(dirPath, cb) {
//   const items = dirPath.split('/')
//   let index = 1
//   function next() {
//     if (index > items.length) {
//       return cb && cb()
//     }
//     let dir = items.slice(0, index++).join('/')
//     fs.access(dir, (err) => {
//       if (err) {
//         fs.mkdir(dir, next)
//       } else {
//         next()
//       }
//     })
//   }
//   next()
// }

// makeDir('a/b/c', () => {
//   console.log('创建成功')
// })


// 将access和mkdir处理成promise风格
const access = promisify(fs.access)
const mkdir = promisify(fs.mkdir)

async function myMakeDir(dirPath, cb) {
  const items = dirPath.split('/').join('/')
  for (let i = 1; i <= items.length; i++) {
    const dir = items.slice(0, i)
    try {
      await access(dir)
    } catch (error) {
      await mkdir(dir)
    }
  }
  cb && cb()
}

myMakeDir('a/b/c', () => {
  console.log('创建成功')
})