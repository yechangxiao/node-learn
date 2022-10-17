const { User } = require('../model')

// 用户登录
exports.login = async (req, res, next) => {
  try {
    // 处理请求
    res.send('login')
  } catch (err) {
    next(err)
  }
}

// 用户注册
exports.register = async (req, res, next) => {
  try {
    // 处理请求
    console.log(req.body.user);
    
    // 验证通过，将数据保存到数据库
    const user = new User(req.body.user)
    // 保存到数据库
    await user.save()
    // 发送成功响应
    res.status(201).json({
      user
    })
    // res.send('register')
  } catch (err) {
    next(err)
  }
}

// 获取当前用户
exports.getCurrentUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('getCurrentUser')
  } catch (err) {
    next(err)
  }
}

// 更新当前用户
exports.updateCurrentUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('updateCurrentUser')
  } catch (err) {
    next(err)
  }
}