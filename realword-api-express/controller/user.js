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
    res.send('register')
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