const router = require('express').Router()

// Models
const Post = require('../models/post')

/**
 * @method          post
 * @name            /api/posts/
 * @description     Create a new post
 */
router.post('/', async (req, res) => {

  const newPost = new Post(req.body)
  try {
    const savedPost = await newPost.save()
    res.status(200).json({ post: savedPost, message: "success" })
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
        res.status(200).json({ post: updatedPost, message: `Post updated successfully` });
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
