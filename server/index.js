const express = require('express')
const mongoose = require('mongoose')

const app = express()

require('dotenv').config()
const { MONGO_ATLAS_URL } = process.env

mongoose.set('strictQuery', false);
mongoose.connect( MONGO_ATLAS_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.log(`Connected to MONGO Atlas`);
})
.catch((err) => console.error(err))

app.use("/", (req, res) => {
  console.log(`Hey!! You are visiting the root url`);
  res.status(200).send('<h1>This is the root route</h1>')
})

app.listen(3001, () => {
  console.log(`Server is running in port no. 3001`);
})
