import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: true, city: false
    };
  };


  clickCity(){
    this.setState({profile: false, city: true})
  }

  clickCity(){
    this.setState({profile: true, city: false})
  }

  






}
