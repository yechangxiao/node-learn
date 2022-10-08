const express = require('express')
const { MongoClient } = require('mongodb')

const connectUri = 'mongodb://localhost:27017'
const dbClient = new MongoClient(connectUri)

const app = express()
// 配置解析请求体数据 application/json
// 会把请求解析到的数据放到req.body中
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/articles', async (req, res) => {
  // console.log(req.body)
  const { article } = req.body
  if (!article || !article.title || !article.description || !article.body) {
    return res.status(422).json({
      error: '请求参数不符合规则要求'
    })
  }
  await dbClient.connect()
  const collection = dbClient.db('test').collection('articles')
  article.createdAt = new Date()
  article.updatedAt = new Date()
  const ret = await collection.insertOne(article)
  article._id = ret.insertedId
  res.status(201).json({
    article
  })
})

app.get('/articles', (req, res) => {
  res.send('get/articles')
})

app.get('/articles/:id', (req, res) => {
  res.send('get/articles/id')
})

app.patch('/articles/:id', (req, res) => {
  res.send('patch/articles/id')
})

app.delete('/articles/:id', (req, res) => {
  res.send('delete/articles/id')
})

app.listen(3000, () => {
  console.log('app listening at port 3000')
})