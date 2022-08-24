// 检查文件夹是否存在，也可以检查是否有相关的读写权限
const fs = require('fs')
fs.access('basis', fs.constants.R_OK, (err) => {
  console.log(err, 'basis');
})

// 创建文件夹，mkdir或mkdirSync
const folderName = '/personProjects/0-github-projects/node-learn/basis/fs模块/testdir'
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (error) {
  console.error(error)
}

// 读取目录的内容，readdir或readdirSync
const readdirPath = '/personProjects/0-github-projects/node-learn'
const readdir = fs.readdirSync(readdirPath)
console.log(readdir, 'readdir')

// 重命名文件夹，rename或renameSync
fs.renameSync(folderName, '/personProjects/0-github-projects/node-learn/basis/fs模块/renamedir1', err => {
  if (err) {
    console.error(err)
    return
  }
  // 完成
})

// 删除文件夹，rmdir或rmdirSync
// 删除包含内容的文件夹更复杂，推荐使用fs-extra模块
const fsExtra = require('fs-extra')
fsExtra.remove('/personProjects/0-github-projects/node-learn/basis/fs模块/renamedir')
  .then(() => console.log('删除成功'))
  .catch(err => console.error(err))
