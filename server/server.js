import mongoose from 'mongoose'
import template from './../template'
//comment out before building for production
import devBundle from './devBundle'
import config from '../config/config'
import app from './express'
//comment out before building for production
devBundle.compile(app)



app.get('/', (req, res) => {
  res.status(200).send(template())
})

app.listen(config.port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})

// Database Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri)

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})
