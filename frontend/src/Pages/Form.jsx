import React, { useState } from 'react'

const Form = () => {

    const [Name,setName] = useState();
    const [Email,setEmail] = useState();
    const [Pass,setPass] = useState();

    const handlesubmit = async (e)=>{
        e.preventDefault();

        const newuser = {
            Name:Name,
            Email:Email,
            Pass:Pass
        }

        const Response = await fetch("http://localhost:5000/userregistration", {
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body: JSON.stringify(newuser)
        });

        if (Response.ok) {
            alert("Data Added Successfully");
            window.location.href = '/read';
        } else {
            alert("Failed to submit data.");
        }

    }

  return (
    <div className="container">
        <form className='mt-5' onSubmit={handlesubmit}>
            <h1 className='mt-5' style={{textAlign:'center'}}>Insert Data</h1>
            <div className="mb-3">
                <label for="Name" className="form-label">Name:</label>
                <input type="text" className="form-control" id="Name" onChange={(e)=>setName(e.target.value)} aria-describedby="emailHelp" placeholder='Enter Your Name' />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email Address:</label>
                <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp" placeholder='Enter Your Email' />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password:</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPass(e.target.value)} placeholder='Enter Your Password'/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Form