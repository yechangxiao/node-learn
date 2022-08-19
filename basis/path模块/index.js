const notes = '/d/myProjects/0-my-github-projects/node-learn/index.js'

const path = require('path')

console.log(path.dirname(notes))
console.log(path.basename(notes))
console.log(path.extname(notes))
console.log(path.basename(notes, path.extname(notes)))

console.log('-------------------')
const name = 'ycx'
console.log(path.join('\\', 'user', name, 'index.js'))
console.log(path.resolve('index.js'))
console.log(path.resolve('ycx', 'index.js'))
console.log(path.resolve('\\ycx', 'index.js'))

console.log('-----------------')
console.log(path.normalize('/d/myProjects/0-my-github-projects/node-learn/../index.js'))
console.log(path.normalize('/d/myProjects/0-my-github-projects/node-learn/./index.js'))

