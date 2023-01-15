const router = require('express').Router()

// Models
const Category = require('../models/category')

/**
 * @method          post
 * @name            /
 * @description     Create a new Category
 */
router.post('/', async (req, res) => {
  const newCategory = new Category(req.body)

  try {
    const category = await newCategory.save()
    res.status(200).json({ category, message: `${req.body.name} category is created successfully.`})
  } catch (error) {
    res.status(500).json(error)
  }
})

/**
 * @method          get
 * @name            /
 * @description     Get all the categories
 */
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find()
    res.status(200).json(categories)
  } catch (error) {
    
  }
})

module.exports = router