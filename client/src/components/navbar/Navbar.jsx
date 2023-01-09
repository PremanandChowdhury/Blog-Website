import './Navbar.css'

const Navbar = () => {
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
          <li className="navListItem">Home</li>
          <li className="navListItem">About</li>
          <li className="navListItem">Contact</li>
          <li className="navListItem">Create</li>
          <li className="navListItem">Logout</li>
        </ul>
      </div>
      <div className="navRight">
        <img className="navImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GoLl5TulaocWLQ8pi__zObTN8Sj5PmFvec-6NEPb&s" alt="Profile" />
        <i className="navSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}

export default Navbar