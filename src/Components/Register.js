import React, { useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Register() {

    const [username,setUsername] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const registration=()=>{  
        let param = {
          first_name:username, 
          password:password,
          username:email, 
        }
    
        fetch('http://127.0.0.1:8000/register',{
          method:"POST",
          body:JSON.stringify(param),
        }).then((response)=>{
          response.json().then((data)=>{
            localStorage.setItem('isLoggedIn',true)
            window.location.href = '/'
          })
        })
    
      }
  return (
   <>

   
   <Nav/>
   <section className="hero-section d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12 mx-auto">
                            <form className="custom-form"  role="form" onSubmit={(e)=>{
                                e.preventDefault()
                                registration()}}>
                                <h2 className="hero-title text-center mb-4 pb-2">Create an account</h2>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-floating">
                                            <input type="text" name="full-name" onChange={(e)=>setUsername(e.target.value)} id="full-name" className="form-control" placeholder="Full Name" required=""/>
                                            
                                            <label for="floatingInput">Full Name</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-floating mb-4 p-0">
                                            <input type="email"  onChange={(e)=>setemail(e.target.value)} name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required=""/>

                                            <label for="email">Email address</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-12">
                                        <div className="form-floating p-0">
                                            <input onChange={(e)=>setpassword(e.target.value)} type="password" name="password" id="password" className="form-control" placeholder="Password" required=""/>

                                            <label for="password">Password</label>
                                        </div>

                                    </div>

                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-lg-5 col-md-5 col-5 ms-auto">
                                           <button type="submit" className="form-control">Submit</button>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-7">
                                        <Link to="/login"> <p className="mb-0">Already have an account? Login</p></Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>

               
            </section>
   </>
  )
}

export default Register