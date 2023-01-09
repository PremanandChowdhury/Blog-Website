import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img 
      className='headerImg'
      src="https://images.pexels.com/photos/2418435/pexels-photo-2418435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Header Cover" />
    </header>
  )
}

export default Header