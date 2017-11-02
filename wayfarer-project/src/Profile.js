import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import './profile.css';
import ShowPage from './ShowPage.js';
import Avatar from './Avatar';
import EditCity from './Components/EditCity'


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentCity: "",
    };
    this.cityEdit.bind(this)
  };
  componentDidMount(){
  this.props.joinDate(this.props.id)
  }

  cityEdit(){

    axios({
        method: 'put',
        url: `http://localhost:3002/api/users/` + this.props.id,
        data: {
          currentCity: this.state.currentCity
        },
       }).then(res => {
         console.log(res)
    }).catch(err => {
      console.log(err)
   })
  }

  handleCityChange(e){
    this.setState({currentCity: e.target.value});
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
            <li><a  onClick={this.props.logout} href="#"><span className="glyphicon glyphicon-log-out"/> Logout</a></li>
            </ul>
          </div>
        </nav>


        <div className="topics container">
          <div className="row">
            <div className="col-md-6 boxOne">
              <Avatar id={this.props.id}/>
            </div>
            <div className="col-md-6 boxTwo">
              <div className="col-md-12 nestedBox1">
                Welcome! {this.props.firstName.charAt(0).toUpperCase() + this.props.firstName.slice(1)} {this.props.lastName.charAt(0).toUpperCase() + this.props.lastName.slice(1)}
              </div>
              <div className="col-md-12 nestedBox2">
              Current City <a className="cityEdit" href="#" data-toggle="modal" data-target="#editCity">
              <span className="	glyphicon glyphicon-pencil"/>
              </a>

              <EditCity cityEdit={this.cityEdit.bind(this)}
              handleCityChange ={this.handleCityChange.bind(this)}/>

              </div>
              <div className="col-md-12 nestedBox3">
                Joined Date:
                <br/>{this.props.date}
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
