import { useRef, useState } from "react";
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Navigate, useNavigate } from "react-router-dom";
import { login } from '../axios/accessServer';

// import 'semantic-ui-css/semantic.min.css';
import axios from "axios";


export default
  function Login(props) {

  const mailRef = useRef(null)
  const passwordRef = useRef(null)
  // const checkPasswordRef = useRef(null)
  const [visible, setVisible] = useState(false);

  let navigate = useNavigate()

  const sendData = async () => {
    debugger


    let data = {
      email: mailRef.current.value,
      password: passwordRef.current.value
    }
    //const base_url="http://localhost:3010";
    // export const login = async (data) => {
    //     console.log(data.email);
    //     console.log(data.password);
        let response = await axios.get(`localhost:3010/user/findUserByName`, data);
        // return response;

    //let response = await login(data);
    console.log(response);
    if (response.data.status == false) {
      alert("אירע שגיאה במהלך ההתחברות")

    }
    else {
      // save user in store

      alert("wellcom")

      // navigate
      navigate({
        pathname: "/UserHome",
        // search:createSearchParams({name:nameRef.current.value,password:passwordRef.current.value}).toString()
      })
    }
    console.log(response.data);
  }



  // function checkRegister() {
  //   // setVisible(true) 

  //   // (passwordRef.current.value===checkPasswordRef.current.value&&passwordRef.current.value?alert("wellcom"):alert("your password is worng"))

  // }
  return (

    <div className="login-wrapper">
      {/* <h1>logo</h1> */}
      <h1>התחברות</h1>
      <form onSubmit={sendData}>


        <label >שם משתמש:</label>
        <input ref={mailRef} id="mail" type="text" required />


        <br />


        <label htmlFor="Password">סיסמא:</label>
        <input ref={passwordRef} id="password" type="password" required />

        <br />


        <div>
          <button type="submit" onClick={sendData}>log in</button>

          {/* <DashBoard checkRegister={visible} /> */}
        </div>
        {/* {location} */}

      </form>
    </div>

    // <div className="login-wrapper">
    //   {/* <h1>logo</h1> */}
    //   <h1>התחברות</h1>
    //   <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
    //     <Grid.Column style={{ maxWidth: 450 }}>
    //       <Header as='h2' color='teal' textAlign='center'>
    //         <Image src='/logo.png' /> Log-in to your account
    //       </Header>
    //       <Form size='large'>
    //         <Segment stacked>
    //           {/* mail */}
    //           <Form.Input ref={mailRef} fluid icon='user' iconPosition='left' placeholder='E-mail address' />
    //           {/* password */}
    //           <Form.Input ref={passwordRef} fluid icon='lock' iconPosition='left'
    //             placeholder='Password'
    //             type='password'
    //           />

    //           <Button color='teal' fluid size='large' onClick={sendData}>
    //             Login
    //           </Button>
    //         </Segment>
    //       </Form>

    //       <Message>
    //         New to us? <a href='#'>Sign Up</a>
    //       </Message>
    //     </Grid.Column>
    //   </Grid>

    // </div>
  )
}

