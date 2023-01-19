import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('/categories')
      setCategories(response.data)
    }
    fetchCategories()
  }, [])

  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <div className="sidebarTitle">ABOUT ME</div>
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt="Sidebar cover"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas voluptatem labore autem ex laboriosam ipsa laborum.
        </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">CATEGORIES</div>
        <ul className="sidebarList">
          {
           categories.map((category, idx) => (
            <Link key={idx} to={`/?category=${category.name}`} className="link">
              <li className="sidebarListItem">{category.name}</li>
            </Link>
           )) 
          }
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">FOLLOW US</div>
        <ul className="sidebarSocial">
          <i className="sidebarSocialIcon fab fa-facebook-square"></i>
          <i className="sidebarSocialIcon fab fa-twitter-square"></i>
          <i className="sidebarSocialIcon fab fa-pinterest-square"></i>
          <i className="sidebarSocialIcon fab fa-instagram-square"></i>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar