import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Redirect,Route,Switch} from "react-router-dom";

import Home from './home/pages/Home';

import '../src/assets/css/app.css';
//import '../src/assets/css/icons.css';
import Customer from './customer/pages/Customer';
import ErrorBoundary from './ErrorBoundary';
import './assets/css/bootstrap.min.css'


function App() {
  
  let routes;

  routes=  (
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/customer" component={Customer}/>
  <Redirect to="/" />
  </Switch>
  )
  return (
   <Router>
     <ErrorBoundary>
     {routes}
     </ErrorBoundary>
   </Router>
  );
}

export default App;
