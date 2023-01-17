import { useState, useEffect } from 'react'
import axios from "axios"
import './Home.css'

import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [posts, setPosts] = useState([])
  const { search } = useLocation()
  
  useEffect(() => {
    const fetchedData = async ( ) => {
      const response = await axios.get('/posts' + search)
      setPosts(response.data)
    }
    fetchedData()
  }, [search])

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  )
}

export default Home