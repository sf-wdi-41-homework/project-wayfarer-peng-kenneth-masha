import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import './profile.css';

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
          <nav className="navbar navbar-default navbar-inverse" role="navigation">
            <div className="container">
              <div className="navbar-header">
                <ul className="list-inline">
                <li>
                  <a className="navbar-brand" href="/">Home</a>
                </li>
                <li>
                  <div className="col-sm-3 col-md-3">
                    <form className="navbar-form" role="search">
                      <div className="input-group">
                        <input type="text" class="form-control" placeholder="Search" name="q"/>
                        <div className="input-group-btn">
                          <button className="btn" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>
                <li>
                  <div className="navbar-header float-right">
                    <button type="button" className="btn btn-info btn-sm">
                      <span className="glyphicon glyphicon-log-out"></span> Log out
                    </button>
                  </div>
                </li>
              </ul>
            </div>
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
}
export default Profile;
