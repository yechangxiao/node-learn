// get请求
const https = require('https')
const options = {
  hostname: 'nodejs.cn',
  port: 443,
  path: '/todos',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log('状态码：', res.statusCode)
  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', err => {
  console.error(err)
})

req.end()

// post请求
const https = require('https')
const data = JSON.stringify({
  todo: 'todo something'
})

const options = {
  hostname: 'nodejs.cn',
  port: 443,
  path: '/todos',
  method: 'POST',
  Headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }

  const req = https.request(options, res => {
    console.log('状态码：', res.statusCode)
    res.on('data', d => {
      process.stdout.write(d)
    })
  })

  res.on('error', err => {
    console.error(error)
  })

  req.write(data)
  req.end()
}

// PUT和DELETE请求使用相同的POST请求格式，只需要更改options.method的值