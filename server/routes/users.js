const router = require('express').Router()
const bcrypt = require('bcrypt')

// Models
const User = require('../models/user')

/**
 * @method          put
 * @name            /:id
 * @description     Update the user with the given user id
 */
router.put('/:id', async (req, res) => {
  
  if(req.body.userId === req.params.id) {
    const salt = await bcrypt.genSalt(10)
    req.body.password = await bcrypt.hash(req.body.password, salt)

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id, 
        {
          $set: req.body
        }, 
        {
          new:true
        }
      )     
      res.status(200).json({ user: updatedUser, message: `User with id: ${req.params.id} updated successfullly`})

    } catch (error) {
      res.status(500).json({ message: error })
    }

  } else {
    res.status(401).json({ message: `You are not allowed to perform this operation` })
  }
})

module.exports = router
