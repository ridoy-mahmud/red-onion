import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Authentication/Login/Login';
import Facility from './components/Facility/Facility';
import Footer from './components/Shared/Footer/Footer';
import Signup from './components/Authentication/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Router path="/signup">
            <Signup></Signup>
          </Router>
          <Route path="/facility">
            <Facility></Facility>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
