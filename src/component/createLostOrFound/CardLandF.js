// import React, { useRef, useState } from 'react'
// import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react';
// import UploadImages from '../createLostOrFound/UploadImage';
// import { Navigate, useNavigate, createSearchParams } from "react-router-dom";
// import Calendar from '../createLostOrFound/Calendar';
// import axios from "axios";
// import { connect } from "react-redux";
// import { LOF } from '../../redux/actions/action'
// import './CardLostAndFound.css'



// function FormLostOrFound(props) {

//   const { dispatch } = props;
//   const itemNameRef = useRef(null);
//   const descriptionRef = useRef(null);

//   const typeStatusRef = useRef(null);
//   const imageRef = useRef(null);
//   const idCategoryRef = useRef(null);
//   const typeTicketRef = useRef(null);
//   const nameRef = useRef(null);
//   const passwordRef = useRef(null);
//   const checkPasswordRef = useRef(null);
//   const emailRef = useRef(null);
//   const phoneRef = useRef(null);
//   let navigate = useNavigate();


 

//   const colorOptions = [
//     { key: 'r', text: 'אדום', value: 'red' },
//     { key: 'y', text: 'צהוב', value: 'yellow' },
//     { key: 'blu', text: 'כחול', value: 'blue' },
//     { key: 'o', text: 'כתום', value: 'orange' },
//     { key: 'gre', text: 'ירוק', value: 'green' },
//     { key: 'bla', text: 'שחור', value: 'black' },
//     { key: 'gra', text: 'אפור', value: 'gray' },
//     { key: 'br', text: 'חום', value: 'brown' },
//     { key: 'w', text: 'לבן', value: 'white' },
//     { key: 'go', text: 'זהב', value: 'gold' },
//     { key: 's', text: 'כסף', value: 'silver' },

//   ]


//   const categoryOptions = [
//     { key: 'l', text: 'אבידה', value: 'lost' },
//     { key: 'f', text: 'מציאה', value: 'found' },
//     { key: 'o', text: 'Other', value: 'other' },
//   ]

// // const colorsSelect = document.getElementById('colors');
// // const selectedColors = Array.from(colorsSelect.selectedOptions).map(option => option.value);
// // console.log(selectedColors); // Output: Array of selected color values

// // const selectedTicketType = document.querySelector('input[name="ticketType"]:checked').value;
// // console.log(selectedTicketType); // Output: The value of the selected radio button


//   const send = async () => {
//     debugger
//     alert("one")

//     let data = {
//       username: nameRef.current.value,
//       image: imageRef.current.value,
//       description: descriptionRef.current.value,
//       // typeStatus:typeStatusRef.current.value,
//       typeTicket:typeTicketRef.current.value,
//       itemName:itemNameRef.current.value,
//       idCategory:idCategoryRef.current.value,

//       // mail: emailRef.current.value,
//       // password: passwordRef.current.value,
//       // name: nameRef.current.value,
//       // phoneNumber: phoneRef.current.value
//     }

//     alert("two");
//     let response = await axios.get(`http://localhost:3030/laf/newlostOrFound`, data);

//     alert("three");
//     console.log(response);
//     alert(response);
//     debugger
//     if (response.data.status == false) {
//       alert("אירעה שגיאה במהלך יצירת הכרטיסיה");

//     }
//     else {
//       alert("wellcom");
//       dispatch(LOF(response.data))
//       navigate({
//         pathname: "/UserHome",
//       })
//     }
//   }

//   return (
//     <div className='form'>
//       {/* <h1>logo</h1> */}
//       <h1> יצירת אבידה או מציאה</h1>
//       {/* <form> */}
//       <label >שם משתמש:</label>
//       <input className='input' ref={nameRef} id="name" type="text" required />

//       <br />

//       <label >שם אבדה / מציאה:</label>
//       <input className='input' ref={itemNameRef} id="itemName" type="text" required />

//       <br />

//       <label htmlFor="form-select">סיסמא:</label>
//       <input className='input' ref={passwordRef} id="password" control={Select} options={categoryOptions} type="password" required />

//       <br />
//       <label htmlFor="colors">צבעים:</label>
//       <select className='input' id="colors" multiple>
//         <option value="red">אדום</option>
//         <option value="green">ירוק</option>
//         <option value="blue">כחול</option>
//         <option value="yellow">צהוב</option>
//         <option value="orange">כתום</option>
//       </select>

//       {/* <br/>
//       <label htmlFor="category">קטגוריה:</label>
// <select id="category" name="category" multiple required>
//   <option value="option1">אופציה 1</option>
//   <option value="option2">אופציה 2</option>
//   <option value="option3">אופציה 3</option>
// </select> */}

//       <br/>

//       <label htmlFor="lost">
//     <input type="radio" name="ticketType" id="lost" value="lost" required />
//     אבידה
//   </label>

//   <label htmlFor="found">
//     <input type="radio" name="ticketType" id="found" value="found" required />
//     מציאה
//   </label>

//   <label htmlFor="other">
//     <input type="radio" name="ticketType" id="other" value="other" required />
//     אחר
//   </label>


// <br/>
// <label htmlFor="category">צבע:</label>
//       <select id="category" name="category" >
//         <option value=""> בחר צבע:</option>
//         <option value="option1">אופציה 1</option>
//         <option value="option2">אופציה 2</option>
//         <option value="option3">אופציה 3</option>
//       </select>
//       {/* <br/>
//       <label for="category">קטגוריה:</label>
// <select id="category" name="category">
//   <option value="">בחר קטגוריה</option>
//   <option value="option1">אופציה 1</option>
//   <option value="option2">אופציה 2</option>
//   <option value="option3">אופציה 3</option>
// </select> */}

//       <br/>
//       <label htmlFor="checkpassword">אימות סיסמא:</label>
//       <input className='input' ref={checkPasswordRef} id="checkpassword" type="password" required></input>

//       <br />
//       <label htmlFor="email">מייל :</label>
//       <input className='input' ref={emailRef} id="mail" type="email" required></input>
//       {/* {error && <h2 style={{color: 'red'}}>{error}</h2>} */}

//       <br />
//       <label htmlFor="phone">פלאפון :</label>
//       <input className='input' ref={phoneRef} id="phone" type="phone" required></input>
//       <br />

//       <button className='button' onClick={send}>send</button>
// <br/>
      
//     </div>

// //------------///

//     // <Form>
//     //   <Form.Group widths='equal'>
//     //     <Form.Field
//     //       id='form-input-control-item-name'
//     //       control={Input}
//     //       label='שם האבדה'
//     //       placeholder='שם האבדה'
//     //       ref={itemNameRef}
//     //     />

//     //     <Form.Field
//     //       control={Select}
//     //       options={categoryOptions}
//     //       label={{ children: 'קטגוריה', htmlFor: 'form-select' }}
//     //       placeholder='קטגוריה לבחירה'
//     //       // search
//     //       searchInput={{ id: 'form-select' }}
//     //       ref={idCategoryRef}

//     //     />

//     //     <Form.Field
//     //       control={Select}
//     //       options={colorOptions}
//     //       label={{ children: 'צבע', htmlFor: 'form-select' }}
//     //       placeholder='צבע לבחירה'
//     //       // search
//     //       searchInput={{ id: 'form-select' }}
//     //     />

//     //   </Form.Group>
//     //   <Calendar></Calendar>
//     //   <Calendar></Calendar>
//     //   <Form.Group grouped>
//     //     <label>מציאה/אבידה</label>
//     //     <Form.Field
//     //       label='מציאה'
//     //       control='input'
//     //       type='radio'
//     //       name='htmlRadios'
//     //     />
//     //     <Form.Field
//     //       label='אבידה'
//     //       control='input'
//     //       type='radio'
//     //       name='htmlRadios'
//     //     />
//     //   </Form.Group>

//     //   <Form.Group grouped>
//     //     <label>גודל החפץ</label>
//     //     <Form.Field
//     //       label='קטן'
//     //       control='input'
//     //       type='radio'
//     //       name='htmlRadios'
//     //     />
//     //     <Form.Field
//     //       label='בנוני'
//     //       control='input'
//     //       type='radio'
//     //       name='htmlRadios'
//     //     />
//     //     <Form.Field
//     //       label='גדול'
//     //       control='input'
//     //       type='radio'
//     //       name='htmlRadios'
//     //     />
//     //   </Form.Group>

//     //   <UploadImages ref={imageRef}></UploadImages>
//     //   <Form.Field
//     //     id='form-textarea-control-opinion'
//     //     control={TextArea}
//     //     label='תאור החפץ'
//     //     placeholder='תאור החפץ'
//     //   />

//     //   <Form.Group widths='equal'>
//     //     {/* <Form.Field
//     //       id='form-input-control-phone'
//     //       control={Input}
//     //       label='פלאפון'
//     //       placeholder='פלאפון'
//     //     /> */}

//     //     {/* <Form.Field
//     //       id='form-input-control-mail'
//     //       control={Input}
//     //       label='מייל'
//     //       placeholder='מייל'
//     //       ref={}
//     //     /> */}

//     //   </Form.Group>

//     //   <Form.Field
//     //     id='form-button-control-public'
//     //     control={Button}
//     //     content='Confirm'
//     //     label='Label with htmlFor'
//     //     onClick={send}
//     //   />


//     // </Form>

//   )
// }

// export default connect()(FormLostOrFound)