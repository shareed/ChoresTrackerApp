import React from 'react';
import { Route } from "react-router-dom";


import Header from './components/header';
import Home from './components/home';
import SignIn from './components/signin';
import SignUp from './components/signup';
import UserHome from './components/User/userHome';
import UserUsers from './components/User/UserUsers/userUsers';
function App() {
  return (
    <div className=" app container">
      <Header />
     <Route exact path = '/' component = {Home} />
     <Route path = '/signin' component = {SignIn} />
     <Route path = '/signup' component = {SignUp} />
     <Route path = '/userhome' component = {UserHome} />
     <Route path = '/addperson' component = {UserUsers} />
    </div>
  );
}

export default App;
