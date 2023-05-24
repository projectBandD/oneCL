import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//INDEX.JS
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";

//components
import Login from './component/loginAndConnect/loginNew'
import NewUser from './component/loginAndConnect/newUser';
import TableLostAndFound from './component/tableLostAndFound'
import UserHome from './component/UserHome/userHome';
import CardLostOrFound from './component/createLostOrFound/CardLostOrFound';
import AllMyMessages from './component/MyMessages/AllMyMessages';
import UserMeessages from './component/UserHome/UserMessages';
// import Dashboard from './component/Dashboard/dashBoard'
//mbd
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import 'semantic-ui-css/semantic.min.css'

//react router
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
<React.StrictMode>

  <Provider store={store}>

    {/* <App /> */}
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<App />}>
      <Route path='Login' element={<Login/>}></Route>
      <Route path='NewUser' element={<NewUser/>}></Route>
      <Route path='UserHome' element={<UserHome/>}></Route>
      <Route path='TableLostAndFound' element={<TableLostAndFound/>}></Route>
      <Route path='CardLostOrFound' element={<CardLostOrFound/>}></Route>
      <Route path='AllMyMessages' element={<AllMyMessages/>}></Route>
      <Route path='UserMeessages' element={<UserMeessages/>}></Route>


      {/* <Route path='Dashboard' element={<Dashboard/>}></Route> */}


    </Route>
    </Routes>
    </BrowserRouter>
 
  </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
