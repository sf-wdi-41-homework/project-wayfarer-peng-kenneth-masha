import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import './ShowPage.css';
import ProfileIcon from './ProfileIcon';

class ShowPage extends Component {
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

    <div className="showPage container">
      <div className="row">
          <div className="col-md-6">
              <div className="big-box">image</div>
          </div>
          <div className="col-md-6">
              <div className="row">
                  <div className="col-md-6"><div className="mini-box">Title</div></div>
              </div>
              <div className="row">
                  <div className="col-md-6"><div className="mini-box">Author</div></div>
              </div>
          </div>
      </div>
          <div className="row">
              <div className="col-md-6">Cities Component</div>
              <div className="col-md-6">Content</div>
          </div>
  </div>
</div>
  )
  }
}

export default ShowPage;
