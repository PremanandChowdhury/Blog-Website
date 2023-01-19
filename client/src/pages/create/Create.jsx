import './Create.css'

import { useContext, useState } from 'react'
import axios from 'axios'

import {Context} from '../../context/Context'

const Create = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState(null)

  const {user} = useContext(Context)


  const handleSubmit = async (e) => {
    e.preventDefault()

    const newPost = {
      title,
      description,
      username: user.username,
    }

    console.log('newPost', newPost);

    if(file) {
      const data = new FormData()
      const filename = Date.now() + "/" + file.name
      data.append("name", filename)
      data.append("file", file)
      newPost.photo = filename

      try {
        await axios.post("/upload", data)
      } catch (error) {
        console.log(error)
      }
    }

    try {
      const response = await axios.post("/posts", newPost)
      // console.log('>> response', response);
      window.location.replace("/posts/" + response.data._id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='create'>
      {file && (
        <img 
          className='createImg'
          src={URL.createObjectURL(file)} 
          alt="Post Cover" />
      )}
      <form className='createForm' onSubmit={handleSubmit}>
        <div className='createFormGroup'>
          <label htmlFor='fileInput' >
            <i className="createIcon fas fa-plus"></i>
          </label>
          <input 
            type='file' 
            id='fileInput' 
            style={{display: "none"}} 
            onChange={
              (e) => setFile(e.target.files[0])
              }
          />
          <input 
            type="text" 
            placeholder='Title' 
            className='createInput' 
            autoFocus={true} 
            onChange = {
              (e) => setTitle(e.target.value)
              }
          />
        </div>

        <div className="createFormGroup">
          <textarea 
            placeholder='Write your content here....'
            type='text'
            className='createInput createText' 
            cols="30" 
            rows="10"
            onChange={
              (e) => setDescription(e.target.value)
            }
          >
          </textarea>
        </div>

        <button className="createSubmit" type="submit">Publish</button>
      </form>
    </div>
  )
}

export default Create
