import React, { useRef } from 'react';
import AllMyMessages from '../MyMessages/AllMyMessages';
import  UserMessages from '../UserHome/UserMessages';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Rating } from 'semantic-ui-react'

import { Navigate ,useNavigate} from "react-router-dom";

   {/* <UserMessege></UserMessege> */}

export default function UserHome() {

let navigate=useNavigate()

function findLostAndFound(){
  navigate({
    pathname:"/TableLostAndFound"
    // search:createSearchParams({name:nameRef.current.value,password:passwordRef.current.value}).toString()
  })
}

function creatTicket(){
  navigate({
    pathname:"/CardLostOrFound"
 
  })
}

function myMessages(){
  navigate({
    pathname:"/CardLostOrFound"
 
  })
}
  return (
    <>
    <UserMessages></UserMessages>
    <AllMyMessages></AllMyMessages>
    <Button variant="outline-secondary"onClick={creatTicket}>יצירת פניה</Button>{' '}
    <Button variant="outline-secondary" type="submit"onClick={findLostAndFound} >אבדות ומציאות שלי</Button>{' '}


   <Rating maxRating={5} defaultRating={3} icon='star' size='huge' />


    </>

  );
}
