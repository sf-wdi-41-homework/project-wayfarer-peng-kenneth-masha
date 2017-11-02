import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import ProfileIcon from './ProfileIcon';
import './sanFrancisco.css';


class SanFrancisco extends Component {
    render() {
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
          <div className="mainImage">
              <img src="  https://img.grouponcdn.com/deal/i7vJRC7t4ffVzxWeerCA/iy-2048x1228/v1/c620x376.jpg" alt="Golden Gate Bridge"/>
          </div>
          <div className="Posts">
            Posts go here.
          </div>
      </div>
      )
    }
  }

  export default SanFrancisco;
