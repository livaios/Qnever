const express = require('express')
const cors = require('cors')
const passport = require('passport')

const app = express()

const sequelize = require('./config/db_config')
const entity = require('../Qnever/api/routers/entity.router')
const entry = require('../Qnever/api/routers/entry.router')
const queue = require('../Qnever/api/routers/queue.router')
const user = require('../Qnever/api/routers/user.router')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(passport.initialize())

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to postgres 💪 .')
  })
  .catch(err => {
    console.error('Unable to connect to postgres 😳 .', err)
  })

app.use('/api/v1/user', user)
app.use('/api/v1/entity', entity)
app.use('/api/v1/queue', queue)

app.use('/api/v1/entry', entry)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

const eraseDatabaseOnSync = false
sequelize
  .sync({ force: eraseDatabaseOnSync })
  .then(() => console.log('Synced models with database 💃 .'))
  .catch(error =>
    console.log('Could not sync models with database 🤦 .', error)
  )

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server up and running on ${port} 👍 .`))
