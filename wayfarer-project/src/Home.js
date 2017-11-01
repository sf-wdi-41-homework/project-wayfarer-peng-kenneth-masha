import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import './home.css';
import Profile from './Profile'


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
    console.log('yay')
    console.log(this.state.email, this.state.password)

   let email = this.state.email;
   let password = this.state.password;
   axios({
       method: 'post',
       url: `http://localhost:3002/login`,
       data: {
       username: email,
       password: password,
       },
      }).then(res => {
     console.log('res is ', res);
     this.setState({isAuthenticated: true, id:res._id});
   }).catch(err => {console.log("login error: ", err)});
  }

  handleLogout(){
    this.setState({isAuthenticated: false, id:''});
  }
  handlePasswordChange(e){
    console.log(this.state.password)
    this.setState({password: e.target.value});
  }
  handleEmailChange(e){
    console.log(this.state.email)
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
      <li><a href="#home">Home</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#myModal" data-toggle="modal" data-target="#myModal">Log-in</a></li>
    </ul>
  </div>
</nav>

<div className="modal fade" id="myModal">
	<div className="modal-dialog">
      <div className="modal-content">
        <form >
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 className="modal-title">Log-in</h4>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="exampleInputemail1" >email address</label>
              <input className="form-control"  value= {this.state.email} onChange={this.handleEmailChange} name="username" id="exampleInputemail1" placeholder="Enter email" type="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" >Password</label>
              <input className="form-control" value={this.state.password} onChange={this.handlePasswordChange} name="password" id="exampleInputPassword1" placeholder="Password" type="password"/>
            </div>
          </div>
          <div className="modal-footer">
              <a data-dismiss="modal" className="btn">Close</a>
              <a onClick={this.handleSubmit} value="login" className="btn btn-primary">Log-in</a>
          </div>
        </form>
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
                    <div className="item active imageOne">
                        <img src="https://s-media-cache-ak0.pinimg.com/originals/78/a0/3f/78a03f2e10129bac5cda0aaa96033bc2.jpg" alt="Compass"/>
                    </div>
                    <div className="item imageTwo">
                        <img src="http://tremendouswallpapers.com/wp-content/uploads/2014/12/Travel-wallpapers.jpg" alt="Second Slide"/>
                    </div>
                    <div className="item imageThree">
                        <img src="http://tremendouswallpapers.com/wp-content/uploads/2014/12/fantasy-street-abstract-nature-night-city-landscape-dream-wallpapers-wallpaper-wallwuzz-hd-wallpaper-10282.jpg" alt="Third Slide"/>
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
  }else {
    console.log('loged-in')
    return(
      <Profile />
    )
  }
}
}
export default Home;
