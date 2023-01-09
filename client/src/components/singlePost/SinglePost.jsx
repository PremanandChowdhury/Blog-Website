import './SinglePost.css'

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <img 
        className='singlePostImg'
        src="https://images.pexels.com/photos/371909/pexels-photo-371909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Post 1" />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.

          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>

        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Prem</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>

        <p className='singlePostDescription'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, esse quis quibusdam inventore dignissimos libero ipsa, unde delectus harum modi fugiat iste voluptatem velit! Incidunt debitis quisquam consequuntur sed omnis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni illo eveniet voluptatem illum! Accusamus quas sunt at ducimus provident eius quasi sapiente. Nihil, magni consequuntur! Sequi eveniet ea reprehenderit!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem blanditiis laboriosam mollitia, dolorum vitae repudiandae quis ipsam fuga minima, earum accusantium corrupti dolores suscipit perferendis magnam alias corporis magni aliquid

            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Magnam, esse quis quibusdam inventore dignissimos libero ipsa, unde delectus harum modi fugiat iste voluptatem velit! Incidunt debitis quisquam consequuntur sed omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, esse quis quibusdam inventore dignissimos libero ipsa, unde delectus harum modi fugiat iste voluptatem velit! Incidunt debitis quisquam consequuntur sed omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. 

            Magnam, esse quis quibusdam inventore dignissimos libero ipsa, unde delectus harum modi fugiat iste voluptatem velit! Incidunt debitis quisquam consequuntur sed omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, esse quis quibusdam inventore dignissimos libero ipsa, unde delectus harum modi fugiat iste voluptatem velit! Incidunt debitis quisquam consequuntur sed omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, esse quis quibusdam inventore dignissimos libero ipsa, unde delectus harum modi fugiat iste voluptatem velit! Incidunt debitis quisquam consequuntur sed omnis.
          </p>

      </div>
    </div>
  )
}

export default SinglePost