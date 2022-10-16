const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const PORT = process.env.PORT || 3000

// 挂载路由
app.use('/api', router)

app.listen(PORT, () => {
  console.log('ddd');
  
})