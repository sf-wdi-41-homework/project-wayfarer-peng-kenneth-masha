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
      <div classNameName="App">
      <header>

        <nav className="navbar navbar-default navbar-inverse" role="navigation">
          <div className="container-fluid">

            <div className="navbar-header">
              <a className="navbar-brand" href="{Profile}">Home</a>
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-target="#bs-example-navbar-collapse-1"><b>Login</b> <span className="caret"></span></a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        			<ul id="login-dp" className="dropdown-menu">
        				<li>
        					 <div className="row">
        							<div className="col-md-12">
        								 <form onSubmit={this.handleSubmit} className="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
        										<div className="form-group">
        											 <label className="sr-only" for="exampleInputEmail2">Email address</label>
        											 <input onChange={this.handleEmailChange} value={this.state.email} type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required/>
        										</div>
        										<div className="form-group">
        											 <label className="sr-only" for="exampleInputPassword2">Password</label>
        											 <input onChange={this.handlePasswordChange} value={this.state.password} type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required/>
                               <div className="help-block text-right"><a href="">Forget the password ?</a></div>
        										</div>
        										<div className="form-group">
        											 <button type="submit" className="btn btn-primary btn-block">Sign in</button>
        										</div>
        								 </form>
        							</div>
        							<div className="bottom text-center">
        								New here ? <a href="#"><b>Join Us</b></a>
        							</div>
        					 </div>
        				</li>
        			</ul>

            </div>
          </div>
        </nav>

        <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">

  <div className="overlay"></div>


  <ol className="carousel-indicators">
    <li data-target="#bs-carouse" data-slide-to="0" className="active"></li>
    <li data-target="#bs-carouse" data-slide-to="1"></li>
    <li data-target="#bs-carouse" data-slide-to="2"></li>
  </ol>


  <div className="carousel-inner">
    <div className="item slides active">
      <div className="slide-1"></div>
      <div className="hero">
        <hgroup>
            <h1>We are creative</h1>
            <h3>Get start your next awesome project</h3>
        </hgroup>
        <button className="btn btn-hero btn-lg" role="button">See all features</button>
      </div>
    </div>
    <div className="item slides">
      <div className="slide-2"></div>
      <div className="hero">
        <hgroup>
            <h1>We are smart</h1>
            <h3>Get start your next awesome project</h3>
        </hgroup>
        <button className="btn btn-hero btn-lg" role="button">See all features</button>
      </div>
    </div>
    <div className="item slides">
      <div className="slide-3"></div>
      <div className="hero">
        <hgroup>
            <h1>We are amazing</h1>
            <h3>Get start your next awesome project</h3>
        </hgroup>
        <button className="btn btn-hero btn-lg" role="button">See all features</button>
      </div>
    </div>
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
    	</header>
      </div>
    );
  }
}
}

export default Home;
