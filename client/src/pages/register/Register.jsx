import './Register.css'

const Register = () => {
  return (
    <div className='register'>
    <span className="registerTitle">Register</span>
    <form className="registerForm">
      <label>Username</label>
      <input type="text" className='registerInput' placeholder='Enter your username' />

      <label>Email</label>
      <input type="text" className='registerInput' placeholder='Enter your email' />

      <label>Password</label>
      <input type="password" className='registerInput' placeholder="Enter your password..."/>
      
      <button className="registerButton">register</button>
      <button className="registerLoginButton">Login</button>
    </form>

  </div>
  )
}

export default Register