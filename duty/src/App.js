import React, {useState, useEffect} from 'react';
import { Route } from "react-router-dom";

import homeimg from './assets/home.jpg';

import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer'
import WhichSignUp from './components/whichSignUp';
import SignUp from './components/signup';
import SignIn from './components/signin';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className = 'header-container'>

          <div className = "name-header">
              <h1 className = "title">DUTY</h1>
          </div>

          <div className = 'bgimg-div'>
              <img className = 'bgimg' src = {homeimg}  alt = 'pic'/>
          </div>

      </div>
      <Route exact path = '/' component = {Home} />
      <Route path = '/whichsignup' component = {WhichSignUp} />
      <Route path = '/signup' component = {SignUp} />
      <Route path = '/signin' component = {SignIn} />
      <Footer />
    </div>
  );
}

export default App;
