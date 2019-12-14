const express = require('express')
const cors = require('cors')
const passport = require('passport')

const app = express()

const sequelize = require('./config/db_config')
const entity = require('./api/routers/entity.router')
const user = require('./api/routers/user.router')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(loggerMiddleware)
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/v1/user', user)
app.use('/api/v1/entity', entity)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to postgres 💪 .')
  })
  .catch(err => {
    console.error('Unable to connect to postgres 😳 .', err)
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
