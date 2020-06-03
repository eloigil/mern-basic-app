const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const items = require('./routes/api/items')
require('dotenv').config()

const app = express()

// Bodyparser middleware
app.use(bodyParser.json())

// DB config
const db = process.env.mongoURI

// Connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDb Connected...'))
  .catch(err => console.log(err))

// Use routes
app.use('/api/items', items)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))