const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017')

async function run() {
  try {
    // 开始连接
    await client.connect()
    const testDb = client.db('test')
    const usersCollection = testDb.collection('users')
    // const ret = await usersCollection.find()
    // console.log('ret', await ret.toArray())

    // 创建文档
    const ret = await usersCollection.insertOne({
      a:2,
      b:1,
      c:3
    })
    console.log('ret', ret)
  } catch (error) {
    console.log('error', error)
  } finally {
    await client.close()
  }
}

run()