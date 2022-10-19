const { body, param } = require('express-validator')
const mongoose = require('mongoose')
const validate = require('../middleware/validate')
const { Article } = require('../model')

exports.createArticle = validate([
  body('article.title').notEmpty().withMessage('文章标题不能为空'),
  body('article.description').notEmpty().withMessage('文章摘要不能为空'),
  body('article.body').notEmpty().withMessage('文章内容不能为空')
])

exports.getArticle = validate([
  validate.isValidObjectId(['params'], 'articleId')
  // param('articleId').custom(async value => {
  //   if (!mongoose.isValidObjectId(value)) {
  //     return Promise.reject('文章ID类型错误')
  //   }
  // })
])

exports.updateArticle = [
  validate([
    validate.isValidObjectId(['params'], 'articleId')
  ]),
  async (req, res, next) => {
    const articleId = req.params.articleId
    const article = await Article.findById(articleId)
    req.article = article
    if (!article) {
      return res.status(404).end()
    }
    next()
  },
  async (req, res, next) => {
    if (req.user._id.toString() !== req.article.author.toString()) {
      return res.status(403).end()
    }
    next()
  }
]

// 校验文章是否存在


// 校验文章是否是当前登录用户