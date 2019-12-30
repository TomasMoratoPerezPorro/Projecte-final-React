import React from 'react';

import './App.css';

import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import DetailPage from './components/DetailPage';
import ItemDetails from './components/ItemDetails';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Nav />
      <Jumbotron />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/detailpage"} exact component={DetailPage} />
        <Route path={"/detailpage/:id"} component={ItemDetails}/>
      </Switch>
    </Router>
  );
}

export default App;
