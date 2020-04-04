import React, {useState, useEffect} from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';

import Header from './components/header';
import Home from './components/home';
import SignIn from './components/signin';
import SignUp from './components/signup';
import UserHome from './components/User/userHome';
import UserUsers from './components/User/UserUsers/userUsers';
function App() {
  const [user, setUser] = useState('');

  const fetchUser = () => 
  fetch(`http://localhost:500/users`).then(res => res.json())
    .then(user => {
      console.log(user)
      setUser(user)
    });


  return (
    <div className=" app container">
      <Header />
      <button onClick= {e => fetchUser()}>GET USER</button>
     <Route exact path = '/' component = {Home} />
     <Route path = '/signin' component = {SignIn} />
     <Route path = '/signup' component = {SignUp} />
     <Route path = '/userhome' component = {UserHome} />
     <Route path = '/addperson' component = {UserUsers} />
    </div>
  );
}

export default App;
