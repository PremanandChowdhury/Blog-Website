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
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [updateMode, setUpdateMode] = useState(false)

  const { user } = useContext(Context)

  useEffect(() => {
    const getPostById = async () => {
      const response = await axios.get(`/posts/${postId}`)
      setPost(response.data)
      setTitle(response.data.title)
      setDescription(response.data.description)
    }
    getPostById()
  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {
      console.error(error)
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        description
      })
      setUpdateMode(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        { post.photo && (
          <img
            className='singlePostImg'
            src={ publicFolder + post.photo } alt={ post.username + post } />
        ) }

        { updateMode ?
          <input
            type="text"
            placeholder='Enter new title'
            className='singlePostTitleInput'
            value={ title }
            autoFocus
            onChange={ (e) => setTitle(e.target.value) }
          /> :
          (
            <h1 className="singlePostTitle">
              { title }
              { post.username === user?.username && (
                <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit" onClick={ () => setUpdateMode(true) }></i>
                  <i className="singlePostIcon far fa-trash-alt" onClick={ handleDelete }></i>
                </div>
              ) }

            </h1>
          )
        }


        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={ `/?user=${post.username}` } className="link">
              <b> { post.username }</b>
            </Link>
          </span>
          <span className="singlePostDate">{ new Date(post.createdAt).toDateString() }</span>
        </div>

        { updateMode ?
          <textarea
            id="description"
            placeholder='Enter new description'
            rows="10"
            col="30"
            className="singlePostDescriptionInput"
            value={ description }
            onChange={ (e) => setDescription(e.target.value) }
          /> :
          (
            <p className='singlePostDescription'>
              { description }
            </p>
          )
        }

        { updateMode && (
          <button className="singlePostButton" onClick={ handleUpdate }>
            Update
          </button>
        )
        }
      </div>
    </div>
  )
}

export default SinglePost