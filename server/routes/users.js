const router = require('express').Router()
const bcrypt = require('bcrypt')

// Models
const User = require('../models/user')
const Post = require('../models/post')

/**
 * @method          get
 * @name            /:id
 * @description     Get the user with the given user id
 */
router.get('/:id', async (req, res) => {

  try {
    const user = await User.findById(req.params.id)
    const { password, ...others } = user._doc
    res.status(200).json({ user: others, message: `success` })

  } catch (error) {
    res.status(404).json({ message: `User not found`})
  }
  
})

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

/**
 * @method        delete
 * @name          /:id
 * @description   Delete a user with the given userId
 */
router.delete('/:id', async (req, res) => {
  const userId = req.params.id

  if(req.body.userId === userId) {
    
    try {
      const user = await User.findById(userId)
      if(user) {
        try {
          await Post.deleteMany({ username: user.username })
          await User.findByIdAndDelete(userId)

          res.status(200).json({ message: `User with id: ${userId} deleted successfullly`})
        } catch (error) {
          res.status(500).json({ message: error })
        }
      }
    } catch (error) {
      res.status(404).json({ message: `User with id:${userId} not found`})
    }   

  } else {
    res.status(401).json({ message: `You are not allowed to perform this operation` })
  }
})

module.exports = router
