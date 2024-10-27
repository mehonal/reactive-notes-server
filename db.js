const mongoose = require('mongoose')
const config = require('./config.js')

mongoose.connect(config.dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection error from MongoDB:'))
db.once('open', () => {
    console.log('Connected to Mongo!')
})

module.exports = db
