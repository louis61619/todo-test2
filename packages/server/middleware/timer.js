function timer(req, res, next) {
  setTimeout(() => {
    next()
  }, 3000)
}

module.exports = timer
