const service = require('../service/todo')

class TodoController {
  async create(req, res, next) {
    try {
      const { title, description } = req.body
      const result = await service.create(title, description)
      res.json({
        isSucess: true,
        insertId: result.insertId,
      })
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.params
      await service.remove(id)
      res.json({
        isSucess: true,
      })
    } catch (error) {
      next(error)
    }
  }

  async modify(req, res, next) {
    try {
      const { id } = req.params
      const { title, description } = req.body
      await service.modify(id, title, description)
      res.json({
        isSucess: true,
      })
    } catch (error) {
      next(error)
    }
  }

  async list(req, res, next) {
    try {
      const result = await service.list()
      res.json(result)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new TodoController()
