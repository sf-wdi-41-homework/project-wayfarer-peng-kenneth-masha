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
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    let lastName = this. state.lastName;
    let firstName = this.state.firstName;
    console.log(this.state.email);
    axios({
      method: 'post',
      url: `http://localhost:3002/signup`,
      data: {
        username: email,
        password: password,
        lastName: lastName,
        firstName: firstName}
      })
    .then(res => {
      console.log('res is ', res);
      browserHistory.push('/');
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
      <div className="modal fade" id="signup">
        <div className="modal-dialog">
            <div className="modal-content">
              <form >
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title">Sign Up</h4>
                </div>
                <div className="modal-body">
                <div className="form-group">
                  <label className=" " >First Name</label>
                  <div className="">
                  <input className="form-control" value={this.state.firstName} onChange={this.handleFirstNameChange} id="fname" name="firstName" type="text" placeholder="John" className="form-control input-md" required=""/>

                  </div>
                </div>

                <div className="form-group">
                  <label className=" " >Last Name</label>
                  <div className="">
                  <input className="form-control" id="lname" value={this.state.lastName} onChange={this.handleLastNameChange} name="lastName" type="text" placeholder="Doe" className="form-control input-md" required=""/>

                  </div>
                </div>


                <div className="form-group">
                  <label className=" " >Email</label>
                  <div className="">
                  <input id="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange} name="username" type="email" placeholder="johndoe@example.com" className="form-control input-md" required=""/>

                  </div>
                </div>

                <div className="form-group">
                  <label className=" " >Password</label>
                  <div className="">
                    <input id="password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange}name="password" type="password" placeholder="" className="form-control input-md" required=""/>

                  </div>
                </div>
                </div>
                <div className="modal-footer">
                    <div id="loginError"></div>
                    <a data-dismiss="modal" className="btn">Close</a>
                    <a onClick={this.handleSubmit} data-dismiss="modal" value="signup" className="btn btn-primary">Sign Up</a>
                </div>
              </form>
            </div>
          </div>
      </div>


    )
  }
}

export default SignUp
