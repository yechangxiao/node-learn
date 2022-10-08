const express = require('express')

const app = express()
// 配置解析请求体数据 application/json
// 会把请求解析到的数据放到req.body中
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/articles', (req, res) => {
  console.log(req.body)
  const { article } = req.body
  if (!article || !article.title || !article.description || !article.body) {
    return res.status(422).json({
      error: '请求参数不符合规则要求'
    })
  }
  res.send('post/articles')
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