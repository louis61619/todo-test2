const connection = require('../config/databse')

class TodoService {
  async create(title, description) {
    const statement = `
      insert into todolist (title, description) values (?, ?);
    `
    const [result] = await connection.execute(statement, [title, description])
    return result
  }

  async remove(id) {
    const statement = `
      delete from todolist where id = ?;
    `
    const [result] = await connection.execute(statement, [id])
    return result
  }

  async modify(id, title, description) {
    const statement = `
      update todolist set title = ?, description = ? where id = ?;
    `
    const [result] = await connection.execute(statement, [title, description, id])
    return result
  }

  async list() {
    const statement = `SELECT * FROM todolist;`
    const [result] = await connection.execute(statement)
    return result
  }
}

module.exports = new TodoService()
