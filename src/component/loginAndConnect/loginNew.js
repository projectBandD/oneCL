import { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import {ADD_USER} from '../../redux/actions/action'


    function Login(props) {

    const {dispatch}=props;

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const [visible, setVisible] = useState(false);
    let navigate = useNavigate()


//בפוסטמן כן מתחבר למשתשמ קיים אבל מכאן לא למה?
    const send = async () => {
        debugger
        let data = {
            mail: emailRef.current.value,
            password: passwordRef.current.value
        }
        let response = await axios.post(`http://localhost:3030/user/findUserByName`, {
            mail: emailRef.current.value,
            password: passwordRef.current.value
        });
        debugger
        console.log(response);
        if (response.data.status == false) {
            alert("אירע שגיאה במהלך ההתחברות")

        }
        else {
            alert("wellcom")
            dispatch(ADD_USER(response.data))
            navigate({
                pathname: "/UserHome",
            })
        }
    }


    // const sendData = async () => {

    //     let data = {
    //         email: emailRef.current.value,
    //         password: passwordRef.current.value
    //     }

    //     let response = await axios.get(`http://localhost:3030/user/findUserByName`, data);

    //     console.log(response);
    //     if (response.data.status == false) {
    //         alert("אירע שגיאה במהלך ההתחברות")

    //     }
    //     else {
    //         alert("wellcom")

    //         navigate({
    //             pathname: "/UserHome",
    //         })
    //     }
    //     console.log(response.data);
    // }

    return (<div>
        <h1>התחברות</h1>


        <label >שם משתמש:</label>
        <input ref={emailRef} id="mail" type="text" required />

        <br />
        <label htmlFor="Password">סיסמא:</label>
        <input ref={passwordRef} id="password" type="password" required />

        <br />



        <button onClick={send}>send</button>

    </div>)

  
}

export default connect()(Login) 