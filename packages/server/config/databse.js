const mysql = require('mysql2')

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
})

connection.getConnection((err, conn) => {
  conn.connect(async (err) => {
    if (err) {
      console.log('connect database error', err)
    } else {
      console.log('database is connected')
    }
  })
})

module.exports = connection.promise()
