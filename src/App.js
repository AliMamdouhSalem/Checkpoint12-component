
import './App.css';
import React from "react"
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Addresses from './Component/Profile/Address';


const App=()=>(
  <>
  <ProfilePhoto/>
  <br>
  </br>
  <FullName/>
  <br>
  </br>
  <Addresses/>
  </>
  
)

export default App;
