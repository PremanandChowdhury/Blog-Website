import './Settings.css'

import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
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
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePicture">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GoLl5TulaocWLQ8pi__zObTN8Sj5PmFvec-6NEPb&s" alt="Profile" />

            <label htmlFor='fileInput'>
              <i className='settingsProfilePictureIcon far fa-user-circle'></i>
            </label>
            <input type="file" id='fileInput' style={{ display: "none" }}/>
          </div>

          <label>Username</label>
          <input type="text" placeholder='Prem'/>
          <label>Email</label>
          <input type="email" placeholder='prem@blogs.dev'/>
          <label>Password</label>
          <input type="password" />

          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings