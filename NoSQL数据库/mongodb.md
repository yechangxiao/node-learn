### 基础概念
- #### 数据库
- #### 集合
- #### 文档

```js
  {
    // 数据库
    '淘宝': {
      // 集合
      'user': [
        // 文档
        {
          name: '张三',
          age: 18
        },
        {
          name: '李四',
          age: 17
        }
      ]
    }
  }
```

## mongodb 4.4.16
### 启动mongodb服务
#### 默认占用localhost:27017
```js
// 如果不输入地址，则会选择执行mongod命令所处磁盘根目录/data/db作为存储目录，如果不存在，则报错
mongod --dbpath="data的路径"
```

### 连接mongodb服务
```js
// 连接本地非默认端口上运行的mongodb实例
mongo --port 23333

// 连接远程主机上的服务
mongo 'mongodb://mogodb0.example.com:23333'
// 或者指定host和端口
mongo --host mongodb0.example.com:23333
mongo --host mongodb0.example.com --port 23333
```

### shell中执行命令，是一个js执行环境
```js
// 查看所有的数据库
show dbs
// 查看当前的数据库
db
// 切换/创建数据库，有数据才会被创建处理
use '数据库名'
// 删除数据库，需要切换到要删除的数据库
db.dropDatabase()
```
### 数据库名称规则
#### 不区分大小写，建议全部小写

### 集合
```js
// 创建集合，不需要显式创建，直接向集合中插入数据即可
db.hello.inert({a:1,b:2})
// 查看集合
show collections
// 查询所有文档
db.hello.find()
// 删除集合
db.hello.drop()
```

### 文档
#### 字段名称限制
- ##### 字段名称_id保留用作主键，它的值在集合中必须是唯一不可变的，一般不自己设置主键，让系统生成

### 插入文档
```js
// 一般使用插入单个或者插入多个，会返回插入的文档的id
db.hello.insertOne({ a:1,b:2 }) // 插入单个
db.hello.insertMany([{ a:1,b:2 },{a:2,b:3}]) // 插入多个
db.hello.insert({ a:1,b:2 }) // 插入1个/多个
```

### 查询文档
```js
// 指定查询字段，1表示有该字段，0表示没有该字段，只返回item和qty字段，_id总是会返回的
db.hello.find({}, {
  item: 1,
  qty: 1
})

// 相等条件查询, ge为18的整个文档
db.hello.find({ age: 12 })
```