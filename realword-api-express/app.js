const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const PORT = process.env.PORT || 3000

app.get('/', (req, res,) => {
  res.send('hello world')
})

app.post('/', (req, res,) => {
  console.log(req.body);
  
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log('ddd');
  
})