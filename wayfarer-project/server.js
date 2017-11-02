var express = require('express');
  mongoose = require('mongoose'),
  db = require('./models'),
  controllers = require('./controllers'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  morgan = require('morgan');

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/react-project", { useMongoClient: true });

var app = express();

var User = db.User;
var Post = db.Post;


//to config API to use body body-parser and look for JSON in req.body
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
  secret: 'dasdk32jkhdh923dh9$@$*',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
//
//passport config
passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());
//
//
app.use(function(req, res, next) {
  global.currentUser = req.user;
  next();
  });
//Prevent CORS errors
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //Remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
  });



//User auth
app.get('/', function(req, res){
  console.log(req.user)
  res.send('hi')
})

app.get('/api/users', controllers.user.index);
app.put('/api/users/:id', controllers.user.update)
app.get('/api/users/:id', controllers.user.joinDate)
app.post('/signup', function signup(req, res) {
  console.log(`${req.body.username} ${req.body.password}`);
  console.log("kkk: ", req.body)
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!

  var yyyy = today.getFullYear();
  if(dd<10){
      dd='0'+dd;
  }
  if(mm<10){
      mm='0'+mm;
  }
  var today = mm+'/'+dd+'/'+yyyy


  User.register(new User({ username: req.body.username, lastName: req.body.lastName, firstName: req.body.firstName, joinDate: today, img: ``, currentCity:"" }), req.body.password,

    function (err, newUser) {
      if(err){console.log(err)}
      passport.authenticate('local')(req, res, function() {
        res.send(newUser);
      });
    }
  )});
app.post('/login', passport.authenticate('local'), function (req, res) {
  console.log(req)
  console.log("log Hit")
  console.log(JSON.stringify(req.user));
  res.send(req.user);

});
app.get('/logout', function (req, res) {
  console.log("BEFORE logout", req);
  req.logout();
  res.send(req);
  console.log("AFTER logout", req);
});

///Post CRUD

app.post('/api/post', function(req, res){
  let newPost = new Post({
    userId:req.body.id,
    location: req.body.location,
    title: req.body.title,
    details: req.body.details,
    img: ""
  })

  newPost.save(function(err, yay){
    if(err){return console.log(err)};
    res.json(yay)
  })});


var port = process.env.API_PORT || 3002;
app.listen(port, function() {
    console.log(`api running on ${port}`);
});
