import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import './home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'', password: '', id:'', isAuthenticated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSubmit(e){
   e.preventDefault();
   let email = this.state.email;
   let password = this.state.password;
   axios.post(`http://localhost:3002/login`, {
     email: email,
     password: password
   }).then(res => {
     console.log('res is ', res);
     this.setState({isAuthenticated: true, id:res._id});
   }).catch(err => {console.log(err)});
  }

  handleLogout(){
    this.setState({isAuthenticated: false, id:''});
  }
  handlePasswordChange(e){
    this.setState({password: e.target.value});
  }
  handleEmailChange(e){
    this.setState({email: e.target.value});
  }

  getInitialState(){
    return {
      isAuthenticated : false
    }
  }



  render() {
    if(this.state.isAuthenticated === false){
    return (
      <div className="home">

        <nav className="navbar navbar-default" role="navigation">
  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul className="nav navbar-nav navbar-left">
      <li><a href="#home"> Home </a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#myModal" data-toggle="modal" data-target="#myModal">Log-in</a></li>
    </ul>
  </div>
</nav>

<div className="modal fade" id="myModal">
	<div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h4 className="modal-title">Log-in</h4>
        </div>
        <div className="modal-body">
          <div className="form-group">
    		<label for="exampleInputEmail1">Email address</label>
    		<input className="form-control" id="exampleInputEmail1" placeholder="Enter email" type="email"/>
  		  </div>
		  <div className="form-group">
		  	<label for="exampleInputPassword1">Password</label>
			<input className="form-control" id="exampleInputPassword1" placeholder="Password" type="password"/>
		  </div>
          <p className="text-right"><a href="#">Forgot password?</a></p>
        </div>
        <div className="modal-footer">
          <a href="#" data-dismiss="modal" className="btn">Close</a>
          <a href="#" className="btn btn-primary">Log-in</a>
        </div>
      </div>
    </div>
</div>

        <div className="myCarousel">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img src="/public/images/674925.png" alt="First Slide"/>
                    </div>
                    <div className="item">
                        <img src="/Users/mariaarbisman/WDI/project-wayfarer-peng-kenneth-masha/wayfarer-project/public/images/mothers-day-aurora-borealis-c2a9-christopher-martin-5949.jpg" alt="Second Slide"/>
                    </div>
                    <div className="item">
                        <img src="/Users/mariaarbisman/WDI/project-wayfarer-peng-kenneth-masha/wayfarer-project/public/images/travel-background-1469438128PVK.jpg" alt="Third Slide"/>
                    </div>
                </div>

                <a className="carousel-control left" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a className="carousel-control right" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div>
        </div>

  <div className="topics container">
    <div className="row">
      <div className="col-md-4 topicOne">
            Topic 1
      </div>
      <div className="col-md-4 topicTwo">
            Topic 2
      </div>
      <div className="col-md-4 topicThree">
            Topic 3
      </div>
    </div>
  </div>
  </div>
    );
  }
}
}
export default Home;
