import React, {  useEffect, useState } from 'react'
import './login.css'
import axios from 'axios'
// import notecontext from '../../context/notecontex'
// import { useNavigate ,Link} from "react-router-dom";




export default function Login() {
  const [email,setEmail] =useState()
  const [password,setpassword] =useState()
  // const context =useContext(notecontext)
  // const {fetchUser}=context
  // const navigate = useNavigate();

 



  const handleSubmit=async (e)=>{

    e.preventDefault()
    // await fetchUser(email,password)
    console.log("hello")

  }





  return (
    <div className='Login'>
        <div className="cards">
            <div className="left">
              {/* <h1 className="text-center" >Lets Chat</h1> */}
              {/* <span className='mess'>Don't Have an account</span> */}
              {/* <button className='Resister my-5'>Resister</button> */}
            </div>
            <div className="right">
             <h1  className='text-center ll'>login</h1>
             <form className='formlogin my-4' onSubmit={handleSubmit}>

                <input className='inputlogin my-3' type="text" placeholder='Username' onChange={(e)=>setEmail(e.target.value)} />
                <input className='inputlogin' type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)} />
                <button className='Resister2' type="submit">Login</button>
                
              <button className='Resister2'><a to='/register'>Resister</a></button>

             </form>
            </div>
        </div>

    </div>
  )
}
