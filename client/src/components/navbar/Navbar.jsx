import './Navbar.css'

import { useContext } from 'react';
import { Link } from 'react-router-dom'

import { Context } from '../../context/Context';


const Navbar = () => {
  const { user, dispatch } = useContext(Context);

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
          <li className="navListItem" onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="navRight">
        {
          user ? (
            <img className="navImage" src={user.profilePic ? user.profilePic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GoLl5TulaocWLQ8pi__zObTN8Sj5PmFvec-6NEPb&s"} alt="profile" />
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
