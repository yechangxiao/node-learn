const express = require('express')
const userCtrl = require('../controller/user')
const userValidate = require('../validator/user')
const auth = require('../middleware/auth')

const router = express.Router()

// 用户登录
router.post('/users/login', userValidate.login, userCtrl.login)

// 用户注册
router.post('/users', userValidate.register, userCtrl.register) // 通过验证，执行具体的控制器处理

// 获取当前登录用户
router.get('/user', auth, userCtrl.getCurrentUser)

// 更新当前用户
router.put('/user', auth, userCtrl.updateCurrentUser)

module.exports = router