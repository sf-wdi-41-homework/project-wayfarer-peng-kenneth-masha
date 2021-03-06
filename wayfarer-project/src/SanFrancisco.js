import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import ProfileIcon from './ProfileIcon';
import './sanFrancisco.css';
import MyPost from './Components/myPost'


class SanFrancisco extends Component {

    render() {
      let sfPost = this.props.allPost.filter((post)=>{
        return post.location=== "San Francisco"
      })
      let post = sfPost.map((post)=>{
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
                  <h1> San Francisco </h1>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="mainImage">
              <img src="  https://img.grouponcdn.com/deal/i7vJRC7t4ffVzxWeerCA/iy-2048x1228/v1/c620x376.jpg" alt="Golden Gate Bridge"/>
          </div>
          <div className="Posts">
            {post}
          </div>
      </div>
      )
    }
  }

  export default SanFrancisco;
