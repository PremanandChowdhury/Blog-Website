import './Post.css'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  const publicFolder = "http://localhost:5000/images/"

  return (
    <div className='post'>
      {post.photo && (
        <img 
          className='postImg'
          src={publicFolder + post.photo} 
          alt={post.username+'post'} 
        />
      )}
      <div className="postInfo">
        <div className="postCategory">
        { post.categories.map((category, idx) => (
              <span key={idx} className="postSingleCategory">
                {category}
              </span>
            ))
        }
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">
            {post.title}
          </span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDescription">{post.description}</p>
    </div>
  )
}

export default Post