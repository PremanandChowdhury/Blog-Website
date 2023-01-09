import './Sidebar.css'

const Sidebar = () => {
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
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
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