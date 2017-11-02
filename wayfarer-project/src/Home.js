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
  };

  cookieLogIn(){
   let userCookie = this.getCookie("login");
   let loginArray = userCookie.split(',');
   console.log("cookieLogIn: ", loginArray);

    axios({
     method: 'POST',
     url: `http://localhost:3002/login`,
     data: {
       username: loginArray[0],
       password: loginArray[1]
     },
   })
   .then(res => {
     console.log('res is ', res);
     this.setState({isAuthenticated: true, id:res._id, username:res.username});
       console.log("got an cookie!!!log in!!")
       console.log("hello peng...ball is in your court...")
   }, err => {
     console.log('oops!');
     console.log(err);
   });
  }

  componentDidMount(){
    this.cookieLogIn()
  }



  setCookie(cname, cvalue, expireHour) {
        var d = new Date();
        d.setTime(d.getTime() + (expireHour * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

  getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
  }

  killCookie() {
        this.setCookie("login", "", 0);
        console.log("killed cookie: ", this.getCookie("User"));
    }



  handleSubmit(e){
   e.preventDefault();
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
     console.log(this.state.isAuthenticated)
     this.setState({isAuthenticated:true, id:res.data._id});
     this.setCookie('login', `${email},${password}`, 0.5)
   }).catch(err => {
     document.getElementById('loginError').innerHTML ="";
     document.getElementById('loginError').append("Invalid Email or Password")});
  }

  handleLogout(){
    this.setState({isAuthenticated: false, id:''});
    this.killCookie()
  }
  handlePasswordChange(e){
    this.setState({password: e.target.value});
  }
  handleEmailChange(e){
    this.setState({email: e.target.value});
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
              <div id="loginError"></div>
              <a data-dismiss="modal" className="btn">Close</a>
              <a onClick={this.handleSubmit} data-dismiss="modal" value="login" className="btn btn-primary">Log-in</a>
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
      <Profile id={this.state.id} logout={this.handleLogout.bind(this)}/>
    )
  }
}
}
export default Home;
