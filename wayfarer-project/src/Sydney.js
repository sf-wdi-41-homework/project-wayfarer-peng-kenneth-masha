import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import ProfileIcon from './ProfileIcon';
import './sanFrancisco.css'
import MyPost from './Components/myPost'



class Sydney extends Component {
    render() {
      let syPost = this.props.allPost.filter((post)=>{
        return post.location=== "Sydney"
      })
      let post = syPost.map((post)=>{
          return (
              <MyPost myTitle={post.title} myDetails={post.details}/>
            )}
        )

      return(
        <div>
          <div className="navigationWithPic">
            <nav className="navbar navbar-default" role="navigation">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <h1> Sydney </h1>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="mainImage">
              <img src="https://62b44a55c8f3a87440df-45c7b4d5aac2f388172e587008aaac69.ssl.cf2.rackcdn.com/event-536-1470870017-ny-power-women-large.jpg" alt="NY"/>
          </div>
          <div className="Posts">
            {post}
          </div>
      </div>
      )
    }
  }

  export default Sydney;
