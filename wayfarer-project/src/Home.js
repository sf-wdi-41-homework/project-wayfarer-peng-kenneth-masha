import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '', password: '', id:'', isAuthenticated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleemailChange = this.handleemailChange.bind(this);
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
  handleEmailChange(e){
    this.setState({email: e.target.value});
  }
  handlePasswordChange(e){
    this.setState({password: e.target.value});
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
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Home</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"></span></a>
        			<ul id="login-dp" className="dropdown-menu">
        				<li>
        					 <div className="row">
        							<div className="col-md-12">
        								 <form onSubmit={this.handleSubmit} className="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
        										<div className="form-group">
        											 <label className="sr-only" for="exampleInputEmail2">Email address</label>
        											 <input onChange={this.handleEmailChange} type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required/>
        										</div>
        										<div className="form-group">
        											 <label className="sr-only" for="exampleInputPassword2">Password</label>
        											 <input onChange={this.handlePasswordChange} type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required/>
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

    		<div className="ourCarousel container-fluid">
    			<div className="row">
    				<div className="col-md-12">
    					<div className="carousel slide" data-ride="carousel" id="carouselExampleIndicators">
    						<ol className="carousel-indicators">
    							<li className="active" data-slide-to="0" data-target="#carouselExampleIndicators"></li>
    							<li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
    							<li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
    						</ol>
    						<div className="carousel-inner" role="listbox">
    							<div className="carousel-item active">
    								<img alt="First slide" className="d-block img-fluid" src="/674925.png"/>
    								<div className="carousel-caption d-none d-md-block">
    									<h3>Heading 1</h3>
    									<p>Caption 1</p>
    								</div>
    							</div>
    							<div className="carousel-item">
    								<img alt="Second slide" className="d-block img-fluid" src="/mothers-day-aurora-borealis-c2a9-christopher-martin-5949.jpg"/>
    								<div className="carousel-caption d-none d-md-block">
    									<h3>Heading 2</h3>
    									<p>Caption 2</p>
    								</div>
    							</div>
    							<div className="carousel-item">
    								<img alt="Third slide" className="d-block img-fluid" src="/travel-background-1469438128PVK.jpg"/>
    								<div className="carousel-caption d-none d-md-block">
    									<h3>Heading 3</h3>
    									<p>Caption 3</p>
    								</div>
    							</div>
    						</div><a className="carousel-control-prev" data-slide="prev" href="#carouselExampleIndicators" role="button"><span aria-hidden="true" className="carousel-control-prev-icon"></span> <span className="sr-only">Previous</span></a> <a className="carousel-control-next" data-slide="next" href="#carouselExampleIndicators" role="button"><span aria-hidden="true" className="carousel-control-next-icon"></span> <span className="sr-only">Next</span></a>
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
