const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

require('dotenv').config()
const { MONGO_ATLAS_URL } = process.env

// Routes
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')

mongoose.set('strictQuery', false);
mongoose.connect( MONGO_ATLAS_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.log(`Connected to MONGO Atlas`);
})
.catch((err) => console.error(err))

// Middleware
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)


app.get('/', (req, res) => {
  res.send(`Working with the root route`)
})

app.listen(3001, () => {
  console.log(`Server is running in port no. 3001`);
})
