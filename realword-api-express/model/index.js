const mongoose = require('mongoose')
const { dbUri } = require('../config/config.default')

// 连接mongodb数据库

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', err => {
  console.log('mongodb 数据库连接失败', err)
})

db.once('open', function () {
  console.log('mongodb 连接成功')
})

// // 创建一个模型
// const Cat = mongoose.model('Cat', { name: String })

// const kitty = new Cat({ name: 'xxx' })

// kitty.save().then(() => console.log('meow')
// )

// 组织导出模型类
module.exports = {
  User: mongoose.model('User', require('./user')),
  Article: mongoose.model('Article', require('./article'))
}