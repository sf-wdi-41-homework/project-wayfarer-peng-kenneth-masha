import React, { Component } from 'react';


class Post extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-md-12">
          <h1>Subject: {this.props.title}</h1>
          <h4>{this.props.location}</h4>
          <br/>
          <p> {this.props.details} </p>
        </div>
      </div>

    )
  }
}


export default Post
