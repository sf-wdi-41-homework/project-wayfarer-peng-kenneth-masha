import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import './home.css';
import Profile from './Profile'
import Login from './Components/Login'
import SignUp from './Components/Signup'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'', password: '', id:'', isAuthenticated: false, joinDate: '', firstName:'', lastName:'',
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
     this.setState({isAuthenticated: true, id:res.data._id, email:res.data.username});
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

  joinDate(id){
    axios({
      method: 'GET',
      url: `http://localhost:3002/api/users/` + id,
    }).then(res=>{
      console.log(res.data.joinDate)
       this.setState({joinDate: res.data.joinDate, firstName: res.data.firstName, lastName: res.data.lastName})
    }).catch(err =>
    console.log("line 57", err))
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


/////login
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
     this.setCookie('login', `${email},${password}`, 0.5);

   }).catch(err => {
     document.getElementById('loginError').innerHTML ="";
     document.getElementById('loginError').append("Invalid Email or Password")});
  }

  handlePasswordChange(e){
    this.setState({password: e.target.value});
  }
  handleEmailChange(e){
    this.setState({email: e.target.value});
  }


///logout
  handleLogout(){
    this.setState({isAuthenticated: false, id:''});
    this.killCookie()
  }


///signup




  render() {
    if(this.state.isAuthenticated === false){
    return (
      <div className="home">

        <nav className="navbar navbar-default" role="navigation">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-left">
              <li><a href="/">Home</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#myModal" data-toggle="modal"  data-target="#login">
              <span className="glyphicon glyphicon-log-in"/> Login
              </a></li>
              <li><a href="#myModal" data-toggle="modal" data-target="#signup">
              <span className="glyphicon glyphicon-user"/> Sign-Up
              </a></li>
            </ul>
          </div>
        </nav>

        <Login handlePasswordChange ={this.handlePasswordChange} handleEmailChange={this.handleEmailChange}
        handleSubmit={this.handleSubmit}/>

        <SignUp />

        <div className="myCarousel">
            <div id="myCarousel" style={{height: 80 + 'vh', width:100+'%'}}className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item active imageOne">
                        <img  style={{height: 80 + 'vh', width:100+'%'}} src="https://s-media-cache-ak0.pinimg.com/originals/78/a0/3f/78a03f2e10129bac5cda0aaa96033bc2.jpg" alt="Compass"/>
                    </div>
                    <div className="item imageTwo">
                        <img style={{height: 80 + 'vh', width:100+'%'}} src="http://tremendouswallpapers.com/wp-content/uploads/2014/12/Travel-wallpapers.jpg" alt="Second Slide"/>
                    </div>
                    <div className="item imageThree">
                        <img style={{height: 80 + 'vh', width:100+'%'}} src="http://tremendouswallpapers.com/wp-content/uploads/2014/12/fantasy-street-abstract-nature-night-city-landscape-dream-wallpapers-wallpaper-wallwuzz-hd-wallpaper-10282.jpg" alt="Third Slide"/>
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
    return(
      <Profile firstName={this.state.firstName} lastName={this.state.lastName}
      id={this.state.id} logout={this.handleLogout.bind(this)} joinDate={this.joinDate.bind(this)}
      date={this.state.joinDate}/>
    )
  }
}
}
export default Home;
