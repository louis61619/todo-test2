const express = require('express')
const cors = require('cors')
const todo = require('./router/todo')
require('./config/databse')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/todo', todo)

app.use(function errorHandler(err, req, res, next) {
  console.log(err)
  res.status(err.code || 500).send({ error: err.message })
})

app.listen(process.env.SERVER_PORT, () => {
  console.log('server is listen on port ' + process.env.SERVER_PORT)
})
