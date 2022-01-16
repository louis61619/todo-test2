const AppError = require('../error')

function logger(req, res, next) {
  const { title, description } = req.body
  if (title && description) {
    console.log(req.body)
    return next()
  }
  next(new AppError(400, `title and description can't be null`))
}

module.exports = logger
