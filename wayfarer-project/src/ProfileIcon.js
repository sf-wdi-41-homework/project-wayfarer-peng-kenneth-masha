import React, { Component } from 'react';
import birdTaco from './default.jpg';
import './ProfileIcon.css';


class ProfileIcon extends Component {
  render(){
    return(
      <img src={birdTaco} className="profileIconImg"/>
    )
  }
}

export default ProfileIcon;
