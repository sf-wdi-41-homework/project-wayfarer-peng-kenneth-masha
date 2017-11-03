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
      email:'', password: '', id:'', isAuthenticated: false, joinDate: '', firstName:'', lastName:'', currentCity: "",
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
       this.setState({joinDate: res.data.joinDate, firstName: res.data.firstName, lastName: res.data.lastName, currentCity: res.data.currentCity})
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


///edit city
      cityEdit(e){
        axios({
            method: 'put',
            url: `http://localhost:3002/api/users/` + this.state.id,
            data: {
              currentCity: this.state.currentCity
            },
           }).then(res => {
             this.setState({currentCity: res.data.currentCity})
        }).catch(err => {
          console.log(err)
       })
      }

      handleCityChange(e){
        this.setState({currentCity: e.target.value});
      }

      createPost(e){
        e.preventDefault();

      }



  render() {
    if(this.state.isAuthenticated === false){
    return (
      <div className="home">

        <nav className="navbar navbar-default" role="navigation">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-left">
              <li><a href="/">Home</a></li>
              <li className = "dropdown">
                <a href = "#" className = "dropdown-toggle" data-toggle = "dropdown">
                  Cities<b className = "caret"></b>
                </a>
              <ul className = "dropdown-menu">
               <li><a href = "./cities/sanfrancisco">San Francisco</a></li>
               <li><a href = "./cities/newyork">New York</a></li>
               <li><a href = "./cities/london">London</a></li>
               <li><a href = "./cities/sydney">Sydney</a></li>
               <li><a href = "./cities/seattle">Seattle</a></li>
            </ul>
          </li>
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

        <div className="carouselCountainer">
            <div id="myCarousel" style={{height: 60 + 'vh', width:100+'%'}}className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item active imageOne">
                        <img  style={{height: 60 + 'vh', width:100+'%'}} src="https://2p26rc2pcm8t16abux1x69apy7w-wpengine.netdna-ssl.com/wp-content/uploads/2015/01/lambent-london.jpg" alt="Compass"/>
                    </div>
                    <div className="item imageTwo">
                        <img style={{height: 60 + 'vh', width:100+'%'}} src="https://d30bjm1vsa9rrn.cloudfront.net/files/media/International_Media_Centre/Images/SOH/Hi_Res/Sydney_Opera_House_1.jpg" alt="Second Slide"/>
                    </div>
                    <div className="item imageThree">
                        <img style={{height: 60 + 'vh', width:100+'%'}} src="https://hdwallsource.com/img/2014/4/san-francisco-wallpaper-41496-42464-hd-wallpapers.jpg" alt="Third Slide"/>
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
       <div className="col-md-4 topic">
              <i className="fa fa-suitcase fa-2x" aria-hidden="true"></i>
      </div>
        <div className="col-md-4 topicTitle">
         <h2 className = "Wayfarer"> WAYFARER IS...</h2>
         </div>
        <div className="col-md-4 topic">
        </div>
      </div>

    <div className="row">
      <div className="col-md-4 topic">
          <h3>WANDERLUST</h3>              <i className="fa fa-suitcase fa-2x" aria-hidden="true"></i>
           <p> Get away from your everyday. Wander, explore, discover your desire to travel. Meet new people and experience
           new experiences. Make each day a new horizon.</p>

      </div>
      <div className="col-md-4 topic">
           <h3>ADVENTURE</h3>
           <p> Adventure is out there. Sometimes, you can find yourself in the middle
           of nowhere and sometimes in the middle of nowhere is where your find yourself.</p>
      </div>
      <div className="col-md-4 topic">
           <h3>COMMUNITY</h3>
           <p>Share tips and tricks of travel.
        Share your thoughts about your favorite locations around the world
           with people who are also looking for their next adventure.</p>

      </div>
    </div>
  </div>
  </div>
    );
  }else {
    return(
      <Profile firstName={this.state.firstName} lastName={this.state.lastName}
      id={this.state.id} logout={this.handleLogout.bind(this)} joinDate={this.joinDate.bind(this)}
      date={this.state.joinDate} cityEdit={this.cityEdit.bind(this)}
      handleCityChange ={this.handleCityChange.bind(this)}
      authenticate={this.state.isAuthenticated} currentCity={this.state.currentCity}/>
    )
  }
}
}
export default Home;
