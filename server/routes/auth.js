const router = require('express').Router()
const bcrypt = require('bcrypt')

// Models
const User = require('../models/user')

/**
 * @method          post
 * @name            /register
 */
router.post('/register', async (req, res) => {

  try {
    const { username, email, password } = req.body

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username, 
      email, 
      password: hashPassword
    })

    const user = await newUser.save()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }

})

module.exports = router