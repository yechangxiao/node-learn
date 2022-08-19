const fs = require('fs')
fs.readFile('/myProjects/0-my-github-projects/node-learn/basis/fs模块/index.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

try {
  const data = fs.readFileSync('/myProjects/0-my-github-projects/node-learn/basis/fs模块/index.txt', 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}