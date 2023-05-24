import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react';

//components
import LoginTwo from './component/loginAndConnect/loginNew';
import Login from './component/loginAndConnect/login';
import NewUser from './component/loginAndConnect/newUser';
import UserHome from './component/UserHome/userHome';
import TableLostAndFound from './component/tableLostAndFound'
import UserMessege from './component/UserHome/UserMessages'
import AllMyMessages from './component/MyMessages/AllMyMessages'
import CLAF from './component/createLostOrFound/CardLostOrFound'
import Image from './component/createLostOrFound/UploadImage'
import Calendar from './component/createLostOrFound/Calendar';
import Dashboard from './component/Dashboard/dashBoard'
// import SimpleMap from './component/maps/googleMaps'

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <Dashboard setVisible={setVisible} visible={visible} />

      <header>

      </header>
      <div>
        <nav>
        </nav>
      </div>
      {/* <Login></Login> */}
      {/* <SimpleMap></SimpleMap> */}

      {/* <LoginTwo></LoginTwo>
     <NewUser></NewUser>
     <UserHome></UserHome>
     <UserMessege></UserMessege>
     <TableLostAndFound></TableLostAndFound>
     <AllMyMessages></AllMyMessages>
     <CLAF></CLAF>
     <Image></Image>
     < Calendar></Calendar> */}

      <Outlet />
      <footer></footer>
    </div>
  );
}

export default App;
