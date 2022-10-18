const { Article } = require("../model")


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

// 创建文章
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