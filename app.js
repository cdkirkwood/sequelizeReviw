const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const apiRouter = require('./routes')
const { db } = require('./db')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/api', apiRouter)


// app.use('/', (error, req, res, next) => {
//   console.log(error)
// })

db.sync()
  .then(() =>
    app.listen(7734, () => {
      console.log('livin\' it up on port 7734')
    })
  )
