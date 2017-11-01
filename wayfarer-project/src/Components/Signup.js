import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import axios from 'axios';
import { Button, Card, Row, Col } from 'react-materialize';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', password: '', lastName:'', firstName: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    let lastName = this. state.lastName;
    let firstName = this.state.firstName;
    console.log(this.state.email);
    axios.post(`http://localhost:3002/signup`,{username: email,password: password, lastName: lastName, firstName: firstName})
    .then(res => {
      console.log('res is ', res);
      browserHistory.push('/login');
    }).catch( err => {
      console.log(err);
    })
  }
  handleEmailChange(e){
    this.setState({email: e.target.value});
  }
  handlePasswordChange(e){
    this.setState({password: e.target.value});
  }
  handleLastNameChange(e){
    this.setState({lastName: e.target.value});
  }
  handleFirstNameChange(e){
    this.setState({firstName: e.target.value});
  }

  render(){
    return(
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>

          <legend>Register Here</legend>

          <div className="form-group">
            <label className="col-md-4 control-label" >First Name</label>
            <div className="col-md-4">
            <input value={this.state.firstName} onChange={this.handleFirstNameChange} id="fname" name="firstName" type="text" placeholder="John" className="form-control input-md" required=""/>

            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" >Last Name</label>
            <div className="col-md-4">
            <input id="lname" value={this.state.lastName} onChange={this.handleLastNameChange} name="lastName" type="text" placeholder="Doe" className="form-control input-md" required=""/>

            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" >email</label>
            <div className="col-md-4">
            <input id="email" value={this.state.email} onChange={this.handleEmailChange} name="username" type="email" placeholder="johndoe@example.com" className="form-control input-md" required=""/>

            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" >Password</label>
            <div className="col-md-4">
              <input id="password" value={this.state.password} onChange={this.handlePasswordChange}name="password" type="password" placeholder="" className="form-control input-md" required=""/>

            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" ></label>
            <div className="col-md-8">
              <button id="save" type="submit" className="btn btn-success">Register</button>
              <button id="clear" name="clear" className="btn btn-danger">Reset</button>
            </div>
          </div>

          </fieldset>
      </form>

    )
  }
}

export default SignUp
