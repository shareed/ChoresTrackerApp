import React, {useState, useEffect} from 'react';
import { Route } from "react-router-dom";

import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer'
// import WhichSignUp from './components/whichSignup';
import SignUp from './components/signup';
import './App.css';

function App() {

  return (
    <div className="App">
     <Route exact path = '/' component = {Header} />
     <Route exact path = '/' component = {Home} />
     {/* <Route path = '/whichsignup' component = {WhichSignUp} /> */}
     <Route path = '/signup' component = {SignUp} />
    <Footer />
    </div>
  );
}

export default App;
