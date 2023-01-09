import './Create.css'

const Create = () => {
  return (
    <div className='create'>
      <img 
        className='createImg'
        src="https://images.pexels.com/photos/371909/pexels-photo-371909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Post Cover" />
      <form className='createForm'>
        <div className='createFormGroup'>
          <label htmlFor='fileInput' >
            <i className="createIcon fas fa-plus"></i>
          </label>
          <input type='file' id='fileInput' style={{display: "none"}}/>
          <input type="text" placeholder='Title' className='createInput' autoFocus={true} />
        </div>

        <div className="createFormGroup">
          <textarea 
            placeholder='Write your content here....'
            type='text'
            className='createInput createText' cols="30" rows="10">
          </textarea>
        </div>

        <button className="createSubmit">Publish</button>
      </form>
    </div>
  )
}

export default Create
