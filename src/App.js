import React from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import DetailPage from './components/DetailPage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Nav />
      <Jumbotron />
      <switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/detailpage"} component={DetailPage} />
      </switch>
    </Router>
  );
}

export default App;
