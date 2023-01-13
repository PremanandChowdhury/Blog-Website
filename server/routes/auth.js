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
    res.status(200).json({user: user, message: "success"})
  } catch (error) {
    res.status(500).json({ message: error })
  }

})

/**
 * @method          post
 * @name            /login
 */
router.post('/login', async (req, res) => {

  try {
    const user = await User.findOne({ username: req.body.username})
    !user && res.status(400).json({message: "Invalid Credentials"})

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json({message: "Invalid Credentials"})

    const { password, ...others } = user._doc
    res.status(200).json({user: others, message: "success"})

  } catch (error) {
    res.status(500).json({message: error})
  }
  
})

module.exports = router