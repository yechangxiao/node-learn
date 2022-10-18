const { Article, User } = require("../model")


// 创建文章
exports.createArticle = async (req, res, next) => {
  try {
    const article = new Article(req.body.article)
    article.author = req.user._id
    article.populate('author')
    await article.save()
    console.log(article);
    
    res.status(201).json({
      article
    })
  } catch (error) {
    console.log('e', error);
    
    next(error)
  }
}

// 获取文章
exports.getArticle = async (req, res, next) => {
  try {
    // 为什么没有查出author的信息？
    const article = await Article.findById(req.params.articleId).populate('author')
    if (!article) {
      return res.status(404).end()
    }
    res.status(200).json({
      article
    })
  } catch (error) {
    next(error)
  }
}

// 获取文章列表
exports.getArticles = async (req, res, next) => {
  try {
    let { limit = 20, offset = 0, tag, author } = req.query
    limit = Number.parseInt(limit)
    offset = Number.parseInt(offset)

    const filter = {}
    if (tag) {
      filter.tagList = tag
    }
    if (author) {
      const user = await User.findOne({ username: author })
      filter.author = user?._id
    }
    const articles = await Article.find(filter)
      .skip(offset)
      .limit(limit)
      .sort({
        // -1 倒序， 1 升序
        createdAt: -1
      })
    const articlesCount = await Article.countDocuments()
    res.status(200).json({
      articles,
      articlesCount
    })
  } catch (error) {
    next(error)
  }
}