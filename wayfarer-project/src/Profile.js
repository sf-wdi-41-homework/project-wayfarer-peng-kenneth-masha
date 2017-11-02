import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import './profile.css';
import ShowPage from './ShowPage.js';
import Avatar from './Avatar';


class Profile extends Component {
  componentDidMount(){
  this.props.joinDate(this.props.id)
  }


  render() {

    return (
        <div className="profile">
          <nav className="navbar navbar-default" role="navigation">
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-left">
        <li><a href="#home"> Home </a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right text-center">
        <button type="button" onClick={this.props.logout} className="btn btn-info btn-sm text-center">
          <span className="glyphicon glyphicon-log-out"></span> Log out
        </button>
      </ul>
    </div>
  </nav>


        <div className="topics container">
          <div className="row">
            <div className="col-md-6 boxOne">
              <Avatar id={this.props.id}/>
            </div>
            <div className="col-md-6 boxTwo">
              <div className="row">
              <div className="col-md-12 nestedBox1">
                First Name: {this.props.firstName}
                <br/>Last Name: {this.props.lastName}
              </div>
              </div>
              <div className="row">
              <div className="col-md-12 nestedBox2">
                Current City
              </div>
              </div>
              <div className="row">
              <div className="col-md-12 nestedBox3">
                Joined Date:
                <br/>{this.props.date}
              </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" id ="postArea">
              <h2>Post 1:</h2><p>San Francisco </p>
              <h2>Post 2:</h2><p>Seattle </p>
              <h2>Post 3:</h2><p>New York </p>
            </div>
          </div>
        </div>
          <ShowPage />
      </div>
      )
    }
}

export default Profile;
