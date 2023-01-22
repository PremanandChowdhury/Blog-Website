const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const path = require("path")
const cors = require('cors')

const app = express()
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")))
app.use(cors({
  origin: '*' // that will for all like  https / http 
}))

require('dotenv').config()
const { MONGO_ATLAS_URL } = process.env

// Routes
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')

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
app.use('/api/categories', categoryRoute)

// Connecting to the storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")
  }, 
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  }
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single("file"), (req, res) => {
  res.status(200).json(`File has been uploaded successfully.`)
})

app.listen(5000, () => {
  console.log(`Server is running in port no. 5000`);
})
