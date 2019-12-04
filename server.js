const express = require('express')
const cors = require('cors')
const app = express()

const entity = require('../Qnever/api/routers/entity.router')
const entry = require('../Qnever/api/routers/entry.router')
const queue = require('../Qnever/api/routers/queue.router')
const user = require('../Qnever/api/routers/user.router')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//app.use('/api/v1/user', user)
//app.use('/api/v1/entry', entry)
//app.use('/api/v1/entity', entity)
//app.use('/api/v1/queue', queue)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server up and running on ${port} 👍 .`))
