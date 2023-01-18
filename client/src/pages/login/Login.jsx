import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { Context } from '../../context/Context'

import './Login.css'

const Login = () => {
  const userRef = useRef()
  const passwordRef = useRef()
  const { user, dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: 'LOGIN_START' })

    try {
      const response = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      })

      dispatch({ 
        type: "LOGIN_SUCCESS", 
        payload: response.data.user
      })
    } catch (error) {
      dispatch({ 
        type: "LOGIN_FAILURE"
      })      
    }
  }

  console.log('>> user', user, isFetching);

  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className='loginInput' placeholder='Enter your username' 
          ref={userRef}
        />

        <label>Password</label>
        <input type="password" className='loginInput' placeholder="Enter your password..."
          ref={passwordRef}
        />
        
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>

      <button className="loginRegisterButton">
        <Link className="link" to='/register'>Register</Link>
      </button>
    </div>
  )
}

export default Login