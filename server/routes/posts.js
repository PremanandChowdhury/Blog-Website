const router = require('express').Router()

// Models
const Post = require('../models/post')

/**
 * @method          get
 * @name            /api/posts/:id
 * @description     Get a single post
 */
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({ message: `Post not found` })
  }
})

/**
 * @method          get
 * @name            /api/posts/
 * @query           ?user=username | ?category=categoryname
 * @description     Get all posts
 */
router.get('/', async (req, res) => {
  const username = req.query.username
  const categoryName = req.query.category

  try {
    let posts
    if (username) {
      posts = await Post.find({ username })
    } else if (categoryName) {
      posts = await Post.find(
        {
          categories: {
            $in: [categoryName]
          }
        })
    } else {
      posts = await Post.find()
    }

    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ message: `No post found for user ${req.body.username}` })
  }
})

/**
 * @method          post
 * @name            /api/posts/
 * @description     Create a new post
 */
router.post('/', async (req, res) => {

  const newPost = new Post(req.body)
  try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
  } catch (error) {
    res.status(500).json({ error: error, message: `Post creation failed` })
  }
})

/**
 * @method          put
 * @name            /api/posts/:id
 * @description     Update a post
 */
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json({ error: err, message: `Post updation was unsuccessfull` });
      }
    } else {
      res.status(401).json({ message: `Unauthorised to update the post` });
    }
  } catch (err) {
    res.status(500).json({ error: err, message: `Post updation was unsuccessfull` });
  }
});

/**
 * @method          delete
 * @name            /api/posts/:id
 * @description     Delete a post
 */

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (req.body.username === post.username) {
      try {
        await post.delete()
        res.status(200).json({ message: `Post deleted successfully` })
      } catch (error) {
        res.send(500).json({ error: error, message: `Unable to delete the post` })
      }
    } else {
      res.status(401).json({
        message: `Unauthorised to delete the post`
      })
    }
  } catch (error) {
    res.status(500).json({
      error: error,
      message: `Unable to delete the post`
    })
  }
});

module.exports = router
