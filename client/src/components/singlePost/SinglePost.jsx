import './SinglePost.css'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SinglePost = () => {
  const location = useLocation()
  const postId = location.pathname.split('/')[2]
  const [post, setPost] = useState([])

  useEffect(() => {
    const getPostById = async () => { 
      const response = await axios.get(`/posts/${postId}`)
      setPost(response.data)
    }
    getPostById()
  }, [postId])

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img 
          className='singlePostImg'
          src={post.photo} alt={post.username + post} />
        )}
      

        <h1 className="singlePostTitle">
         {post.title}

          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>

        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>{post.username}</b>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>

        <p className='singlePostDescription'>
          {post.description}
        </p>

      </div>
    </div>
  )
}

export default SinglePost