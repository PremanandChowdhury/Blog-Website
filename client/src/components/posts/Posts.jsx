import './Posts.css'
import Post from '../post/Post'

const Posts = ({ posts }) => {
  return (
    <div className="posts">
     {
      posts.map((post) => (
        <Post key={post._id} post={post}/>
      ))
     }
    </div>
  )
}

export default Posts