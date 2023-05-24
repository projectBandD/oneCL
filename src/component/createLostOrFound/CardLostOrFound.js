// import React, { useRef, useState } from 'react';

// import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react';
// import DatePicker from 'react-datepicker';

// import UploadImages from '../createLostOrFound/UploadImage';
// import { Navigate, useNavigate, createSearchParams } from "react-router-dom";
// import Calendar from '../createLostOrFound/Calendar';
// import axios from "axios";
// import { connect } from "react-redux";
// import { LOF } from '../../redux/actions/action'
// import './CardLostAndFound.css'

 

// const FormLostOrFound = (props) => {
//   const { dispatch } = props;


//   const userNameRef = useRef(null);
//   const listOfUserRef = useRef(null);
//   const imageRef = useRef(null);
//   const descriptionRef = useRef(null);
//   const typeStatusRef = useRef(null);
//   const isApprovedRef = useRef(null);
//   const isPublishedRef = useRef(null);
//   const typeTicketRef = useRef(null);
//   const itemNameRef = useRef(null);
//   const idCategoryRef = useRef(null);
//   const locationRef = useRef(null);
//   const datePickerRef = useRef(null);
//   // const fileInputRef = useRef(null);
//   const fileInputRef = useRef(null);

//   const [startDate, setStartDate] = useState(null);
//   const allowedTypes = ["image/jpeg", "image/png"];
//   const maxSizeInBytes = 5 * 1024 * 1024; // 
//   let navigate = useNavigate();

//   // const [selectedDate, setSelectedDate] = useState(null);



//   // const handleDateChange = () => {
//   //   const selectedDate = datePickerRef.current.state.selected;
//   //   console.log(selectedDate);
//   // };

//   // const fileSelectedHandler = () => {
//   //   const file = fileInputRef.current.files[0];
//   //   const reader = new FileReader();
//   //   reader.onload = () => {
//   //     const previewUrl = reader.result;
//   //     // Use the previewUrl as needed
//   //     console.log(previewUrl);
//   //   };
//   //   reader.readAsDataURL(file);
//   // };

//   // const fileUploadHandler = () => {
//   //   // Perform the upload logic here
//   // };

//   // const file = imageRef.current.files[0];
//     // Use the file for uploading
//     // console.log(file);
//     // Access the form data using the ref values

    
//   const handleSubmit = async (e) => {

//     e.preventDefault();
//     console.log("Selected date:", startDate);
//     const file = imageRef.current.files[0];

//     if (file) {
//       // Perform validation checks
//       const allowedTypes = ["image/jpeg", "image/png"];
//       const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

//       if (!allowedTypes.includes(file.type)) {
//         alert("Invalid file type. Please select a JPEG or PNG image.");
//         return;
//       }

//       if (file.size > maxSizeInBytes) {
//         alert("File size exceeds the maximum limit of 5MB.");
//         return;
//       }

//       // File is valid, proceed with preview or upload logic
//       const reader = new FileReader();
//       reader.onload = () => {
//         const previewUrl = reader.result;
//         // Use the previewUrl as needed
//         console.log(previewUrl);
//       };
//       reader.readAsDataURL(file);
//     }
    
//     const data = {
//       userName: userNameRef.current.value,
//       listOfUser: Array.from(listOfUserRef.current.selectedOptions, (option) => option.value),
//       image: imageRef.current.files[0],
//       description: descriptionRef.current.value,
//       typeStatus: typeStatusRef.current.value,
//       isApproved: isApprovedRef.current.checked,
//       isPublished: isPublishedRef.current.checked,
//       typeTicket: typeTicketRef.current.value,
//       itemName: itemNameRef.current.value,
//       idCategory: idCategoryRef.current.value,
//       location: locationRef.current.value,
//       selectedDate: datePickerRef.current.selected,
//     };

//     // const handleDateChange = () => {
//     //   const selectedDate = datePickerRef.current.selected;
//     //   console.log(selectedDate);
//     // };

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
//     };

//     // Handle form submission logic here
//     console.log(data);
//   };

//   return (
//     <form className='form' onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="userName">User Name:</label>
//         <input className='input' type="text" id="userName" ref={userNameRef} required />
//       </div>

//       <div>
//         <label htmlFor="listOfUser">List of Users:</label>
//         <select className='input' id="listOfUser" multiple ref={listOfUserRef}>
//           <option value="user1">User 1</option>
//           <option value="user2">User 2</option>
//           <option value="user3">User 3</option>
//         </select>
//       </div>
// {/* 
//       <div>
//         <label htmlFor="image">Image:</label>

//         <input className='input' type="text" id="image" ref={imageRef} required />
//       </div> */}

// <div>
//       <label>בחירת תמונה</label>
//       <input type="file" ref={imageRef} onChange={handleSubmit} />
//     </div>

//       <div>
//         <label htmlFor="description">Description:</label>
//         <textarea className='input' id="description" ref={descriptionRef} required />
//       </div>

//       <div>
//         <label htmlFor="typeStatus">Type Status:</label>
//         <input className='input' type="text" id="typeStatus" ref={typeStatusRef} required />
//       </div>

// <div>
// <label htmlFor="category">צבע:</label>
//       <select className='input' id="category" name="category" >
//          <option value=""> בחר צבע:</option>
//          <option value="option1">אופציה 1</option>
//          <option value="option2">אופציה 2</option>
//          <option value="option3">אופציה 3</option>
//        </select>
// </div>

//       <div>
//         <label htmlFor="isApproved">Is Approved:</label>
//         <input className='input' type="checkbox" id="isApproved" ref={isApprovedRef} />
//       </div>

//       <div>
//         <label htmlFor="isPublished">Is Published:</label>
//         <input className='input' type="checkbox" id="isPublished" ref={isPublishedRef} />
//       </div>

//       <div>
//         <label htmlFor="typeTicket">Type Ticket:</label>
//         <input className='input' type="text" id="typeTicket" ref={typeTicketRef} required />
//       </div>

//       <div>
//         <label htmlFor="itemName">Item Name:</label>
//         <input className='input' type="text" id="itemName" ref={itemNameRef} required />
//       </div>

//       <div>
//         <label htmlFor="idCategory">ID Category:</label>
//         <input className='input' type="text" id="idCategory" ref={idCategoryRef} required />
//       </div>

//       <div>
//         <label htmlFor="location">Location:</label>
//         <input className='input' type="text" id="location" ref={locationRef} required />
//       </div>

//       <div>
//         <label  htmlFor="date">Date:</label>
//         <input className='input' type="text" id="date" ref={datePickerRef} required />
//       </div>

//         <div className="form-group">
//         <label htmlFor="date">בחירת תאריך:</label>
//         <DatePicker
//           id="date"
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//           dateFormat="dd/MM/yyyy"
//           className="form-control"
//         />
//        </div>



//         {/* <DatePicker
//           id="date"
//           ref={datePickerRef}
//           dateFormat="dd/MM/yyyy"
//           placeholderText="Select a date"
//           // required
//           className='input'
//         />
//         <button type="button" onClick={handleDateChange}>Get Selected Date</button> */}
     

//       <button className='button' type="submit" onClick={handleSubmit}>Submit</button>
//     </form>
//   );
// };

// export default connect()(FormLostOrFound)


import React, { useRef, useState } from 'react';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import UploadImages from '../createLostOrFound/UploadImage';
import { Navigate, useNavigate, createSearchParams } from "react-router-dom";
import Calendar from '../createLostOrFound/Calendar';
import axios from "axios";
import { connect } from "react-redux";
import { LOF } from '../../redux/actions/action'
import './CardLostAndFound.css'

const FormLostOrFound = (props) => {
  const { dispatch } = props;
  const userNameRef = useRef(null);
  const listOfUserRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);
  const typeStatusRef = useRef(null);
  const isApprovedRef = useRef(null);
  const isPublishedRef = useRef(null);
  const typeTicketRef = useRef(null);
  const itemNameRef = useRef(null);
  const idCategoryRef = useRef(null);
  const locationRef = useRef(null);
  const datePickerRef = useRef(null);
  const fileInputRef = useRef(null);

  const [startDate, setStartDate] = useState(null);
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

   let navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Selected date:", startDate);
    const file = imageRef.current.files[0];

    if (file) {
      // Perform validation checks
      // const allowedTypes = ["image/jpeg", "image/png"];
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.type)) {
        alert("Invalid file type. Please select a JPEG or PNG image.");
        return;
      }

      if (file.size > maxSizeInBytes) {
        alert("File size exceeds the maximum limit of 5MB.");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);

      // const reader = new FileReader();
      // reader.onload = () => {
      //   const previewUrl = reader.result;
      //   // Use the previewUrl as needed
      //   console.log(previewUrl);
      // };
      // reader.readAsDataURL(file);
    }

    const data = {
      // userName: userNameRef.current.value,
      listOfUser: Array.from(listOfUserRef.current.selectedOptions, (option) => option.value),
      image: imageRef.current.files[0],
      description: descriptionRef.current.value,
      typeStatus: typeStatusRef.current.value,
      isApproved: isApprovedRef.current.checked,
      isPublished: isPublishedRef.current.checked,
      typeTicket: typeTicketRef.current.value,
      itemName: itemNameRef.current.value,
      idCategory: idCategoryRef.current.value,
      location: locationRef.current.value,
      selectedDate: datePickerRef.current.selected,
    };

    alert("two");
    let response = await axios.post(`http://localhost:3030/laf/newlAF`, data);

    alert("three");
    console.log(response);
    alert(response);
    debugger
    if (response.data.status == false) {
      alert("אירעה שגיאה במהלך יצירת הכרטיסיה");
    } else {
      alert("wellcom");
      dispatch(LOF(response.data));
      navigate({
        pathname: "/UserHome",
      });
    }

    console.log(data);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">User Name:</label>
        <input className='input' type="text" id="userName" ref={userNameRef} required />
      </div>

      <div>
        <label htmlFor="listOfUser">List of Users:</label>
        <select className='input' id="listOfUser" multiple ref={listOfUserRef}>
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
          <option value="user3">User 3</option>
        </select>
      </div>

      <div>
        <label>בחירת תמונה</label>
        <input type="file"  accept="image/jpeg, image/png" ref={imageRef} onChange={handleSubmit} />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea className='input' id="description" ref={descriptionRef} required />
      </div>

      <div>
        <label htmlFor="typeStatus">Type Status:</label>
        <input className='input' type="text" id="typeStatus" ref={typeStatusRef} required />
      </div>

      <div>
        <label htmlFor="category">צבע:</label>
        <select className='input' id="category" name="category" >
          <option value=""> בחר צבע:</option>
          <option value="option1">אופציה 1</option>
          <option value="option2">אופציה 2</option>
          <option value="option3">אופציה 3</option>
        </select>
      </div>

      <div>
        <label htmlFor="isApproved">Is Approved:</label>
        <input className='input' type="checkbox" id="isApproved" ref={isApprovedRef} />
      </div>

      <div>
        <label htmlFor="isPublished">Is Published:</label>
        <input className='input' type="checkbox" id="isPublished" ref={isPublishedRef} />
      </div>

      <div>
        <label htmlFor="typeTicket">Type Ticket:</label>
        <input className='input' type="text" id="typeTicket" ref={typeTicketRef} required />
      </div>

      <div>
        <label htmlFor="itemName">Item Name:</label>
        <input className='input' type="text" id="itemName" ref={itemNameRef} required />
      </div>

      <div>
        <label htmlFor="idCategory">ID Category:</label>
        <input className='input' type="text" id="idCategory" ref={idCategoryRef} required />
      </div>

      <div>
        <label htmlFor="location">Location:</label>
        <input className='input' type="text" id="location" ref={locationRef} required />
      </div>

      <div>
        <label htmlFor="date">מיקום:</label>
        <input className='input' type="text" id="date" ref={datePickerRef} required />
      </div>

      <div className="form-group">
        <label htmlFor="date">בחירת תאריך:</label>
        <DatePicker
          id="date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          className="form-control"
        />
      </div>

      <button className='button' type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default connect()(FormLostOrFound);
