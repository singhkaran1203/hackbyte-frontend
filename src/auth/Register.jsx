// import axios from 'axios'
import React, { useContext, useState } from 'react'

// import {Link} from 'react-router-dom'
// import notecontext from '../../context/notecontex'
export default function Register() {
  

  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [cpassword,setCpassword]=useState("")
  // const {registerUser} =useContext(notecontext)


  const handleSubmit=async(e)=>{

    e.preventDefault()

    if(password !== cpassword){
      window.alert('Write correct credentials')
    }
    console.log("HELLO")
  // await registerUser(username,email,password)



  }
   



  return (

     <div className="center">

        <div className='resister'>
        <div className="cards2">
            <div className="left2">
              <div className="center">
              {/* <h1 className="tag " >Hello World</h1> */}
              </div>
                {/* <span className='mess'>Don't Have an account</span> */}
              {/* <button className='Resister my-5'>Resister</button> */}
            </div>
            <div className="right2">
             <h1  className='text-center ll2'>Resister</h1>
             <form className='formlogin2 my-4' onSubmit={handleSubmit}>
                <input className='inputlogin2 ' type="text" placeholder='Username' onChange={((e)=>setUsername(e.target.value))} />
                <input className='inputlogin2' type="email" placeholder='email' onChange={((e)=>setEmail(e.target.value))} />
                <input className='inputlogin2' type="password" placeholder='password' onChange={((e)=>setPassword(e.target.value))} />
               
                {/* <input className='inputlogin2' type="password" placeholder='confirm password' onChange={((e)=>setCpassword(e.target.value))}/> */}
               <div className="contain3">
               
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label class="form-check-label" for="flexRadioDefault2">
   Artist
  </label>
  </div>
  <div class="form-check mx-4">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
  <label class="form-check-label" for="flexRadioDefault3 ">
   Veiwer
  </label>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
  <label class="form-check-label" for="flexRadioDefault4">
   Sponser
  </label>
  </div>
  </div>
  
                <button className='Resister3 '><a to='/'>Login</a></button>
              <button className='Resister3' type='submit'>Resister</button>

             </form>
            </div>
        </div>
        </div>
    
    </div>
  )
}
