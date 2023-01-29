import './Navbar.css'

import { useContext } from 'react';
import { Link } from 'react-router-dom'

import { Context } from '../../context/Context';


const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const publicFolder = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT"
    })
  }

  return (
    <div className='navbar'>
      <div className="navLeft">
        <i className="navIcon fab fa-facebook-square"></i>
        <i className="navIcon fab fa-twitter-square"></i>
        <i className="navIcon fab fa-pinterest-square"></i>
        <i className="navIcon fab fa-instagram-square"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className='link' to='/'>Home</Link>
          </li>
          <li className="navListItem">
            <Link className='link' to='/'>About</Link>
          </li>
          <li className="navListItem">
            <Link className='link' to='/'>Contact</Link>
          </li>
          <li className="navListItem">
            <Link className='link' to='/create'>Create</Link>
          </li>
          <li className="navListItem" onClick={ handleLogout }>
            { user && "Logout" }
          </li>
        </ul>
      </div>
      <div className="navRight">
        {
          user ? (
            <Link to='/settings'>
              <img className="navImage" src={ publicFolder + user.profilePic } alt="profile" />
            </Link>
          ) : (
            <ul className='navList'>
              <li className="navListItem">
                <Link className="link" to='/login'>Login</Link>
              </li>
              <li className="navListItem">
                <Link className="link" to='/register'>Register</Link>
              </li>
            </ul>
          )
        }

        <i className="navSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}

export default Navbar
