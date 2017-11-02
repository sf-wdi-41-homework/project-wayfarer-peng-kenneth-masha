import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import './profile.css';
import ShowPage from './ShowPage.js';
import Avatar from './Avatar';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'', password: '', id:'', isAuthenticated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSubmit(e){
   e.preventDefault();
   let email = this.state.email;
   let password = this.state.password;
   axios.post(`http://localhost:3002/login`, {
     email: email,
     password: password
   }).then(res => {
     console.log('res is ', res);
     this.setState({isAuthenticated: true, id:res._id});
   }).catch(err => {console.log(err)});
  }

  handleLogout(){
    this.setState({isAuthenticated: false, id:''});
  }
  handlePasswordChange(e){
    this.setState({password: e.target.value});
  }
  handleEmailChange(e){
    this.setState({email: e.target.value});
  }

  getInitialState(){
    return {
      isAuthenticated : false
    }
  }

  render() {
    if(this.state.isAuthenticated === false){
    return (
        <div className="profile">
          <nav className="navbar navbar-default" role="navigation">
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-left">
        <li><a href="#home"> Home </a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right text-center">
        <button type="button" className="btn btn-info btn-sm text-center">
          <span className="glyphicon glyphicon-log-out"></span> Log out
        </button>
      </ul>
    </div>
  </nav>


        <div className="topics container">
          <div className="row">
            <div className="col-md-6 boxOne">
              <Avatar/>

              
            </div>
            <div className="col-md-6 boxTwo">
              <div className="row">
              <div className="col-md-12 nestedBox1">
                First Name Last Name
              </div>
              </div>
              <div className="row">
              <div className="col-md-12 nestedBox2">
                Current City
              </div>
              </div>
              <div className="row">
              <div className="col-md-12 nestedBox3">
                Joined Date
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
}
export default Profile;
