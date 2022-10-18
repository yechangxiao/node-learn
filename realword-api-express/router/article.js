const express = require('express')
const articleCtrl = require('../controller/article')
const auth = require('../middleware/auth')
const articleValidator = require('../validator/article')

const router = express.Router()

// 创建文章
router.post('/', auth, articleValidator.createArticle, articleCtrl.createArticle)

// 获取文章
router.get('/:articleId', articleValidator.getArticle, articleCtrl.getArticle)

// 获取文章列表
router.get('/', articleCtrl.getArticles)

module.exports = router