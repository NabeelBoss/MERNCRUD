import React from 'react'

const Update = () => {
  return (
    <div className="container">
        <form>
            <h1 className='mt-5' style={{textAlign:'center'}}>Update</h1>
            <div className="mb-3">
                <label for="Name" className="form-label">Name:</label>
                <input type="text" className="form-control" id="Name" aria-describedby="emailHelp" placeholder='Enter Your Name' />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email Address:</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password:</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password'/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Update