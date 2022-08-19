const fs = require('fs')
const content = '一些内容'
fs.writeFile('/myProjects/0-my-github-projects/node-learn/basis/fs模块/index.txt', content, { flag: 'r+' }, err => {
  if (err) {
    console.error(err)
    return
  }
  console.log('异步写入文件成功')
})

try {
  const data = fs.writeFileSync('/myProjects/0-my-github-projects/node-learn/basis/fs模块/index.txt', '23333')
  console.log('同步写入文件成功')
} catch (err) {
  console.error(err)
}