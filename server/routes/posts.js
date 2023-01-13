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
        res.status(200).json({ post: updatedPost, message: `Post updated successfully`});
      } catch (err) {
        res.status(500).json({error: err, message: `Post updation was unsuccessfull`});
      }
    } else {
      res.status(401).json({ message: `Unauthorised to update the post`});
    }
  } catch (err) {
    res.status(500).json({ error: err, message: `Post updation was unsuccessfull` });
  }
});

module.exports = router