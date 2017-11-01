import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import './CitiesPage.css';
import ProfileIcon from './ProfileIcon.js';

class CitiesPage extends Component {
  render(){
    return(
      <div>
      <div className="navigationWithPic">
      <nav className="navbar navbar-default" role="navigation">
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#home"><ProfileIcon /></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

      <div className="citiesPage container">
        <div className="row">
            <div className="col-md-6">
              Cities
            </div>
            <div className="col-md-6">
              Posts
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default CitiesPage;
