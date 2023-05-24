import { useRef, useState } from "react";
// import "./login.css"
import DashBoard from '../Dashboard/dashBoard'
import { Navigate, useNavigate, useLocation } from "react-router-dom";

export default function Login(props) {
  const nameRef = useRef(null)
  const passwordRef = useRef(null)
  const checkPasswordRef = useRef(null)

  let navigate = useNavigate()
  // let location = useLocation()

  function checkRegister() {

    debugger
    // בדיקת תקינות משתמש - שליחה לשרת לאימות
    // location && location.state ? location.state.data(true) :<div />

    navigate({
      pathname: "/UserHome"
      // search:createSearchParams({name:nameRef.current.value,password:passwordRef.current.value}).toString()
    })
    // (passwordRef.current.value===checkPasswordRef.current.value&&passwordRef.current.value?alert("wellcom"):alert("your password is worng"))



  }
  return (

    <div className="login-wrapper">
      {/* <h1>logo</h1> */}
      <h1>התחברות</h1>
      <form>


        <label >שם משתמש:</label>
        <input ref={nameRef} id="name" type="text" required />


        <br />


        <label htmlFor="Password">סיסמא:</label>
        <input ref={passwordRef} id="password" type="password" required />

        <br />
        <label htmlFor="checkpassword">אימות סיסמא:</label>
        <input ref={checkPasswordRef} id="checkpassword" type="password" required></input>

        <div>
          <button type="submit" onClick={checkRegister}>log in</button>
          
          {/* <DashBoard checkRegister={visible} /> */}
        </div>
        {/* {location} */}

      </form>
    </div>
  )
}


