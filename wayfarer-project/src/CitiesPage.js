import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import './CitiesPage.css';

class CitiesPage extends Component {
  render(){
    return(
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
    )
  }
};

export default CitiesPage;
