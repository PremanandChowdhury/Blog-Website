import './SinglePost.css'
import { useLocation } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Context } from '../../context/Context'

const SinglePost = () => {
  const publicFolder = "http://localhost:5000/images/"
  const location = useLocation()
  const postId = location.pathname.split('/')[2]
  const [post, setPost] = useState([])

  const {user} = useContext(Context)

  useEffect(() => {
    const getPostById = async () => { 
      const response = await axios.get(`/posts/${postId}`)
      setPost(response.data)
    }
    getPostById()
  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };
 
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img 
          className='singlePostImg'
          src={publicFolder + post.photo} alt={post.username + post} />
        )}
      

        <h1 className="singlePostTitle">
         {post.title}
          {post.username === user?.username && (
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
          </div>
          )}

        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
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