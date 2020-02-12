import React from 'react';
import { Route } from "react-router-dom";


import Header from './components/header';
import Home from './components/home';
import SignIn from './components/signin';
import SignUp from './components/signup';
function App() {
  return (
    <div className=" app container">
      <Header />
     <Route exact path = '/' component = {Home} />
     <Route path = '/signin' component = {SignIn} />
     <Route path = '/signup' component = {SignUp} />
    </div>
  );
}

export default App;
