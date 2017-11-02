import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import axios from 'axios';
import { Button, Card, Row, Col } from 'react-materialize';


class Login extends Component{
  render(){
    return(
      <div className="modal fade" id="login">
      	<div className="modal-dialog">
            <div className="modal-content">
              <form >
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title">Log-in</h4>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputemail1" >Email Address</label>
                    <input className="form-control"  value= {this.props.email}
                    onChange={this.props.handleEmailChange} name="username" id="exampleInputemail1"
                    placeholder="Enter email" type="email"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1" >Password</label>
                    <input className="form-control" value={this.props.password}
                    onChange={this.props.handlePasswordChange} name="password"
                    id="exampleInputPassword1" placeholder="Password" type="password"/>
                  </div>
                </div>
                <div className="modal-footer">
                    <div id="loginError"></div>
                    <a data-dismiss="modal" className="btn">Close</a>
                    <a onClick={this.props.handleSubmit} data-dismiss="modal" value="login" className="btn btn-primary">Log-in</a>
                </div>
              </form>
            </div>
          </div>
      </div>

    )
  }

}


export default Login
