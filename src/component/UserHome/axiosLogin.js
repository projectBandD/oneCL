import React from 'react'
import { useState } from 'react'
import {login} from '../axios/accessServer'


export default function SignIn() {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  
  const sendData=async()=>{
    let data = {
      email : email,
      password : password
    }
    let response = await login(data);
    console.log(response.data);
}
  return (
    <div>
       <h1>SignIn</h1> 
       <input type={'email'}  onChange={(e)=>setEmail(e.target.value)}></input>
       {email}
       <br></br>
       <br></br>
       <br></br>

       <input type={'password'}  onChange={(e)=>setPassword(e.target.value)}></input>
       {password}
       <br/>
       <button onClick={sendData}>ok</button>

        </div>
  )
}

