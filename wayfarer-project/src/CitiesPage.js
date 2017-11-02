import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import './CitiesPage.css';
import ProfileIcon from './ProfileIcon.js';


class CitiesPage extends Component {

  createPost(e){
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'http://localhost:3002/signup',
    })
  }

  render(){
    console.log("test", this.state.authenticate)
    if(this.props.authenticate){
    return(
      <div>
      <div className="profile">
      <nav className="navbar navbar-default" role="navigation">
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-left">
            <li><a href="#" onClick={this.props.clickProfile}> Profile </a></li>
            <li><a href="#" onClick={this.props.clickCity}> City Posts </a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right text-center">
          <li><a  onClick={this.props.logout} href="#"><span className="glyphicon glyphicon-log-out"/> Logout</a></li>
          </ul>
        </div>
      </nav>
      </div>

      <div className="citiesPage container">
        <div className="row cities">
            <div className="col-md-6">
              <h1>Cities</h1>
                <div className="row">
                  <div className="col-md-12 sanfrancisco">
                        <div className="col-md-6 sfPic">
                          <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/164726-200.png"/>
                        </div>
                        <div className="col-md-6 sfLink">
                          <h3><a href="./cities/sanfrancisco">San Francisco</a></h3>
                        </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 london">
                        <div className="col-md-6 londonPic">
                          <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/164722-200.png"/>
                        </div>
                        <div className="col-md-6 londonLink">
                          <h3><a href="./cities/london">London</a></h3>
                        </div>
                      </div>
                </div>
                <div className="row">
                  <div className="col-md-12 sydney">
                        <div className="col-md-6 sydneyPic">
                          <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/210016-200.png"/>
                        </div>
                        <div className="col-md-6 sydneyLink">
                          <h3><a href="./cities/sydney">Sydney</a></h3>
                        </div>
                      </div>
                </div>
                      <div className="row">
                        <div className="col-md-12 seattle">
                              <div className="col-md-6 seattlePic">
                                <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/164727-200.png"/>
                              </div>
                              <div className="col-md-6 seattleLink">
                                <h3><a href="./cities/seattle">Seattle</a></h3>
                              </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 newYork">
                                <div className="col-md-6 nyPic">
                                  <img src="https://image.flaticon.com/icons/png/512/244/244652.png"/>
                                </div>
                                <div className="col-md-6 nyLink">
                                  <h3><a href="./cities/newyork">NewYork</a></h3>
                                </div>
                        </div>
                      </div>
                    </div>
            <div className="col-md-6">
              <h1>Posts</h1>
              <button type="button" className="btn btn-secondary addPosts" data-toggle="modal" data-target="#addNewPost"><i className="glyphicon glyphicon-plus"></i></button>

              <div id="addNewPost" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Create A New Post</h4>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">City</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                              <option>San Francisco</option>
                              <option>London</option>
                              <option>Sydney</option>
                              <option>Seattle</option>
                              <option>New York</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="postTitle" placeholder="Enter Post Title Here"/>
                            </div>
                            <div className="form-group">
                              <label htmlFor="post">Share Your Experience:</label>
                              <textarea className="form-control" id="postArea" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
    else{
      <div>
      </div>
    }
  }
};

export default CitiesPage;
