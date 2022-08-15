// 当使用http.createServer()初始化HTTP服务器时，服务器会在获得HTTP请求头(而不是请求正文)时调用回调
// 连接回调中传入的request对象是一个流
// 因此，必须监听要处理的主体内容，并且其是按数据块处理的

// 通过监听流的data事件来获取数据，然后在数据结束时会调用流的end事件

const http = require('http')
const server = http.createServer((req, res) => {
  // 此时可以访问到HTTP请求头
  let data = ''
  req.on('data', chunk => {
    console.log('可用的数据块：', chunk)
    data += chunk
  })
  req.on('end', () => {
    JSON.parse(data).todo
  })
})