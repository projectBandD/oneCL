import { useRef, useState } from "react";

import { Navigate, useNavigate, createSearchParams } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { ADD_USER } from '../../redux/actions/action'
import "./login.css"

// "mail":"bb@gmail.com",
// "password":"12345678",
// "name":"bb",
// "phoneNumber":"054677687"
// "_id": "646b493e52dddf2d12c4ad8a",
//         "__v": 0


function NewUser(props) {
  const { dispatch } = props;
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const checkPasswordRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  let navigate = useNavigate();

  const send = async () => {
    debugger
    alert("one")

    let data = {
      mail: emailRef.current.value,
      password: passwordRef.current.value,
      name: nameRef.current.value,
      phoneNumber: phoneRef.current.value
    }

    alert("two");
    let response = await axios.post(`http://localhost:3030/user/newUser`, data);

    alert("three");
    console.log(response);
    alert(response);
    debugger
    if (response.data.status == false) {
      alert("אירע שגיאה במהלך ההתחברות");

    }
    else {
      alert("wellcom");
      dispatch(ADD_USER(response.data))
      navigate({
        pathname: "/UserHome",
      })
    }
  }


  // function checkRegister(){
  //     (passwordRef.current.value===checkPasswordRef.current.value&&passwordRef.current.value?alert("wellcom"):alert("your password is worng") 
  //     &&!isValidEmail(emailRef.current.value)?alert("bey"):alert("null")&&!isValidPhone(phoneRef.current.value)?alert("phone ok"):alert("phone not ok")
  //     &&!isValidPassword(passwordRef.current.value)?alert("password ok"):alert("your password is worng") )


  // }

  // const [Password, setPassword] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [email, setEmail] = useState('');
  // const [error, setError] = useState(null);

  // function isValidPassword(password) {
  //   // return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  //   return /^(?=.*\d).{8,}$/.test(password);  
  // }


  // const handleChangePassword = event => {
  //   if (!isValidPassword(event.target.value)) {
  //     setError('password is invalid');
  //   } else {
  //     setError(null);
  //   }

  //   setPassword(event.target.value);
  // };



  // function isValidPhone(phone) {
  //   return /(?:[0-9] ?){6,14}[0-9]$/.test(phone);
  // }


  // const handleChangePhone = event => {
  //   if (!isValidPhone(event.target.value)) {
  //     setError('number is invalid');
  //   } else {
  //     setError(null);
  //   }

  //   setPhoneNumber(event.target.value);
  // };




  //   function isValidEmail(email) {
  //     return /\S+@\S+\.\S+/.test(email);
  //   }


  //   const handleChangeMail = event => {
  //     if (!isValidEmail(event.target.value)) {
  //       setError('Email is invalid');
  //     } else {
  //       setError(null);
  //     }

  //     setEmail(event.target.value);
  //   };


  return (

    <div >
      {/* <h1>logo</h1> */}
      <h1>הרשמה לאתר</h1>
      {/* <form> */}
      <label >שם משתמש:</label>
      <input ref={nameRef} id="name" type="text" required />

      <br />

      <label htmlFor="Password">סיסמא:</label>
      <input ref={passwordRef} id="password" type="password" required />

      <br />
      <label htmlFor="checkpassword">אימות סיסמא:</label>
      <input ref={checkPasswordRef} id="checkpassword" type="password" required></input>

      <br />
      <label htmlFor="email">מייל :</label>
      <input ref={emailRef} id="mail" type="email" required></input>
      {/* {error && <h2 style={{color: 'red'}}>{error}</h2>} */}

      <br />
      <label htmlFor="phone">פלאפון :</label>
      <input ref={phoneRef} id="phone" type="phone" required></input>
      <br />

      <button onClick={send}>send</button>

      {/* <label >שם משתמש:</label>
          <input ref={nameRef}id="name" type="text" required/>

          <br/>

          <label htmlFor="Password">סיסמא:</label>
          <input ref={passwordRef}id="password" type="password" onChange={handleChangePassword} required /> 

          <br/>
          <label  htmlFor="checkpassword">אימות סיסמא:</label>
            <input ref={checkPasswordRef}id="checkpassword" type="password" required></input>

            <br/>
          <label  htmlFor="email">מייל :</label>
            <input ref={emailRef}id="mail" type="email" onChange={handleChangeMail} required></input>
            {error && <h2 style={{color: 'red'}}>{error}</h2>}

            <br/>
          <label  htmlFor="phone">פלאפון :</label>
            <input ref={phoneRef}id="phone" type="phone" onChange={handleChangePhone} required></input>
            <br/>

        <button onClick={send}>send</button> */}
      {/* </form> */}
    </div>
  )
}

export default connect()(NewUser)