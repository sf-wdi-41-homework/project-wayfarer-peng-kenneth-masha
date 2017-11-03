import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import './CitiesPage.css';
import ProfileIcon from './ProfileIcon.js';
import Post from './Components/Post'


class CitiesPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location:"San Francisco", title:"", details:"", allPost: []
    };
  };


  createPost(e){
    e.preventDefault()
    let location = this.state.location;
    let title = this.state.title;
    let details = this.state.details;
    let id = this.props.id
    console.log(id)

    axios({
      method: 'POST',
      url: 'http://localhost:3002/api/post',
      data: {
        userId: id,
        location: location,
        title: title,
        details: details,
      }
    }).then(yay=>{console.log(yay)
            this.componentDidMount()})
      .catch(err=>{console.log(`CitiesPage 29`, err)})
  }

  location(e){
    console.log(this.state.allPost)
    console.log(this.state.location)
    this.setState({location: e.target.value})
  }

  titleChange(e){
    this.setState({title: e.target.value})
  }
  detailsChange(e){
    this.setState({details: e.target.value})
  }


  componentDidMount(){
    axios({
    method: 'GET',
    url: 'http://localhost:3002/api/post',
  }).then(succ=>{this.setState({allPost: succ.data});
          console.log(this.state.allPost)})
    .catch(err=>console.log('citiesPage 56', err))
  }




  render(){
    let post = this.state.allPost.map( post => {
      return(
      <Post location={post.location} title={post.title} details={post.details}/>
    )
    })

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
              <div>
              {post}
              </div>

              <div id="addNewPost" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Create A New Post</h4>
                      </div>
                      <div className="modal-body">
                        <form >
                          <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">City</label>
                            <select onChange={this.location.bind(this)} className="form-control" id="exampleFormControlSelect1">
                              <option>San Francisco</option>
                              <option>London</option>
                              <option>Sydney</option>
                              <option>Seattle</option>
                              <option>New York</option>
                            </select>
                          </div>
                          <div className="form-group" >
                            <label htmlFor="title">Title</label>
                            <input onChange={this.titleChange.bind(this)}  type="text" className="form-control" id="postTitle" placeholder="Enter Post Title Here" required/>
                            </div>
                            <div className="form-group">
                              <label htmlFor="post">Share Your Experience:</label>
                              <textarea onChange={this.detailsChange.bind(this)} className="form-control" id="postArea" rows="3" required></textarea>
                            </div>
                            <button  onClick={this.createPost.bind(this)} data-dismiss="modal" type="submit" className="btn btn-primary">Submit</button>
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
