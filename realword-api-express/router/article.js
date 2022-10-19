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

// 更新文章
router.put('/:articleId', auth, articleValidator.updateArticle, articleCtrl.updateArticle)

// 删除文章
router.delete('/:articleId', auth, articleValidator.deleteArticle, articleCtrl.deleteArticle)

module.exports = router