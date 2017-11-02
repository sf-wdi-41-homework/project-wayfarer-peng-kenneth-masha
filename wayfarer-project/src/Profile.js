import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import './profile.css';
import ShowPage from './ShowPage.js';
import Avatar from './Avatar';
import EditCity from './Components/EditCity'
import CitiesPage from './CitiesPage'


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: true, city: false
    };
    this.clickCity=this.clickCity.bind(this)
    this.clickProfile=this.clickProfile.bind(this)
  };
  componentDidMount(){
  this.props.joinDate(this.props.id)
  }



  clickCity(){
    console.log("t", this.state)
    this.setState({profile: false, city: true})
  }

  clickProfile(){
    console.log("t", this.state)
    this.setState({profile: true, city: false})
  }




  render() {

    if(this.state.profile === true){

    return (
        <div className="profile">
        <nav className="navbar navbar-default" role="navigation">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-left">
              <li><a href="#" onClick={this.clickProfiles}> Profile </a></li>
              <li><a href="#" onClick={this.clickCity}> City Posts </a></li>
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
                <span>Welcome!</span> {this.props.firstName.charAt(0).toUpperCase() + this.props.firstName.slice(1)} {this.props.lastName.charAt(0).toUpperCase() + this.props.lastName.slice(1)}
              </div>
              <div className="col-md-12 nestedBox2">
              Current City {this.props.currentCity.charAt(0).toUpperCase() + this.props.currentCity.slice(1)}<a className="cityEdit" href="#" data-toggle="modal" data-target="#editCity">
              <span className="	glyphicon glyphicon-pencil"/>
              </a>

              <EditCity cityEdit={this.props.cityEdit}
              handleCityChange ={this.props.handleCityChange}
              id={this.props.id}/>

              </div>
              <div className="col-md-12 nestedBox3">
                <span>Joined Date:</span>
                <br/>{this.props.date}
              </div>
              </div>
            </div>
          <div className="row">
            <div className="postArea" id ="postArea">
              <h3>Post 1:</h3><p>San Francisco </p>
              <h3>Post 2:</h3><p>Seattle </p>
              <h3>Post 3:</h3><p>New York </p>
            </div>
          </div>
        </div>
      </div>
    )}else if(this.state.city === true){
      return(
        <CitiesPage id={this.props.id} clickProfile={this.clickProfile.bind(this)}
        clickCity={this.clickCity.bind(this)} authenticate={this.props.authenticate} logout={this.props.logout}/>
      )
    }
    }
}

export default Profile;
