import React, { Component } from 'react';


class Post extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-md-12">
          <h1>{this.props.title}</h1>
          <h3>{this.props.location}</h3>
          <br/>
          <p> {this.props.details} </p>
        </div>
      </div>

    )
  }
}


export default Post
