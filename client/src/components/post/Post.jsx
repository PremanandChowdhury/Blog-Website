import './Post.css'

const Post = () => {
  return (
    <div className='post'>
      <img 
        className='postImg'
        src="https://images.pexels.com/photos/371909/pexels-photo-371909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Post 1" 
      />
      <div className="postInfo">
        <div className="postCategory">
          <span className="postSingleCategory">Music</span>
          <span className="postSingleCategory">Life</span>
        </div>
        <span className="postTitle">
          lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur reprehenderit cumque, consectetur, vero qui soluta similique expedita neque quisquam accusamus quam magni ipsa in perspiciatis eaque adipisci, corporis mollitia voluptatem nisi aliquid libero. Laboriosam minus ex, optio quibusdam inventore porro blanditiis debitis ea beatae reprehenderit sit nostrum omnis voluptatibus nobis.</p>
    </div>
  )
}

export default Post