import React from 'react';
import logo_movie from './jumbotron.png';
import { Link } from 'react-router-dom';

const Jumbotron = () =>
  <Link to="/">
    <div className="jumbotron jumbotron-fluid text-white">
      <img className="img-fluid centre" src={logo_movie} alt=""></img>
    </div>
  </Link>

export default Jumbotron 