import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import './profile.css';

class Profile extends Component {
    render() {
      return(
        <div className="profile">
        <nav className="navbar navbar-default navbar-inverse" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Home</a>
            </div>

            <button type="button" className="btn btn-default btn-sm">
                   <span className="glyphicon glyphicon-log-out"></span> Log out
                 </button>
            </div>
        </nav>
        <div className="topics container">
          <div className="row">
            <div className="col-md-6 boxOne">
              Box 1
            </div>
            <div className="col-md-6 boxTwo">
              <div className="row">
              <div className="col-md-6 nestedBox1">
                Nested 1
              </div>
              </div>
              <div className="row">
              <div className="col-md-6 nestedBox2">
                Nested 2
              </div>
              </div>
              <div className="row">
              <div className="col-md-6 nestedBox3">
                Nested 3
              </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>This is where the posts go </p>
            </div>
          </div>
        </div>
      </div>
      )
    }
}
export default Profile;
