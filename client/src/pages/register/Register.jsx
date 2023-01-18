import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Register.css'

const Register = () => {
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault() // For not refresing the page
    setError(false)
    try {
      const response = await axios.post('/auth/register', {
        username, email, password
      })
      response.data.user && window.location.replace("/login")
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className='registerInput' placeholder='Enter your username' onChange={ e => setUsername(e.target.value) }/>

        <label>Email</label>
        <input type="text" className='registerInput' placeholder='Enter your email' onChange={ e => setEmail(e.target.value) }/>

        <label>Password</label>
        <input type="password" className='registerInput' placeholder="Enter your password..." onChange={ e => setPassword(e.target.value) }/>
        
        <button className="registerButton" type='submit'>register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to='/login'>Login</Link>
      </button>
      {error && <span style={{marginTop: 5, color: 'red'}}>Entered Username or Email exists</span>}
    </div>
  )
}

export default Register