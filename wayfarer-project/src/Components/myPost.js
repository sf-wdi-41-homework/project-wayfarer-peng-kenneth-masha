import React, { Component } from 'react';


class MyPost extends Component{
  render(){
    return(
      <div>
      <h3>{this.props.myTitle}</h3>
      <h5>{this.props.myLocation}</h5>
      <p>{this.props.myDetails}</p>
      </div>

    )
  }
}


export default MyPost
