const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const Port = process.env.PORT || 3000
const uri = `mongodb://localhost:27017`

app.use(cors())
app.use(express.json())

connectDB()

app.get('/', async (req, res) => {
  try {
    res.json('The Mongoose Server is running now.')
  } catch (error) {
    console.error(error)
  }
})

app.use('/project', require('./routes/projects'))

app.listen(Port, () => {
  console.log(`This is a Mongoose Server - [${Port}].`)
})
