import './Settings.css'

import { useContext, useState } from 'react'

import { Context } from '../../context/Context'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios'

const Settings = () => {
  const { user, dispatch } = useContext(Context)
  const publicFolder = "http://localhost:5000/images/"

  const [username, setUsername] = useState(user.username)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState(user.password)
  const [file, setFile] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" })
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    }

    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      updatedUser.profilePic = filename
      console.log(file)

      try {
        axios.post('/upload', data)
      } catch (error) {
        console.error(error)
      }
    }

    try {
      const response = await axios.put(`/users/${user._id}`, updatedUser)
      setSuccess(true)
      dispatch({ type: "UPDATE_SUCCESS", payload: response.data })
    } catch (error) {
      console.error(error)
      dispatch({ type: "UPDATE_FAILURE" })

    }
  }

  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">
            Update Your Account
          </span>
          <span className="settingsDeleteTitle">
            Delete Account
          </span>
        </div>
        <form className="settingsForm" onSubmit={ handleUpdate } autoComplete="off">
          <label>Profile Picture</label>
          <div className="settingsProfilePicture">
            <img src={ file ? URL.createObjectURL(file) : publicFolder + user.profilePic } alt="Profile" />

            <label htmlFor='fileInput'>
              <i className='settingsProfilePictureIcon far fa-user-circle'></i>
            </label>
            <input
              type='file'
              id='fileInput'
              style={ { display: "none" } }
              onChange={
                (e) => setFile(e.target.files[0])
              }
            />
          </div>

          <label>Username</label>
          <input type="text" placeholder={ user.username } onChange={ e => setUsername(e.target.value) } autoComplete="off" />
          <label>Email</label>
          <input type="email" placeholder={ user.email } onChange={ e => setEmail(e.target.value) } autoComplete="off" />
          <label>Password</label>
          <input type="password" onChange={ e => setPassword(e.target.value) } autoComplete="new-password" />

          <button className="settingsSubmit" type='submit'>Update</button>
          {
            success && <span style={ { color: 'green', textAlign: 'center', marginTop: '20px' } }>Profile has been updated..</span>
          }
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings