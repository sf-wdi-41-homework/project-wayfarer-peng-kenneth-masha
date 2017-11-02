import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import axios from 'axios';
import { Button, Card, Row, Col } from 'react-materialize';


class EditCity extends Component{
  render(){
    return(
      <div className="modal fade" id="editCity">
      	<div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title">Current City</h4>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <input className="form-control" name="city"
                    id="exampleInputPassword1" onChange={this.props.handleCityChange} placeholder="Current resident city" />
                  </div>
                </div>
                <div className="modal-footer">
                    <div id="loginError"></div>
                    <a data-dismiss="modal" className="btn">Close</a>
                    <a data-dismiss="modal" onClick={this.props.cityEdit} value="login" className="btn btn-primary">Save</a>
                </div>
              </form>
            </div>
          </div>
      </div>

    )
  }

}


export default EditCity
