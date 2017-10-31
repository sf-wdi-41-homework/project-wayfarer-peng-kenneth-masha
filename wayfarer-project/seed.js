var mongoose = require('mongoose');
var db = require('./models');



var test =[
  {
    email: 'abc@gmail.com',
    password: '12321312321321',
    firstName: 'me',
    lastName: 'him',
    currentCity: 'sf',
    joinDate: 'today',
    img: 'dsadsadasda',
  },
];


db.User.remove({},function(err, success){
  if(err){console.log("seed.js err line 18")};
  db.User.create(test, function(err, success){
    if(err){return console.log(err)};
    console.log("db is seeded...",success);
    process.exit();
  });
});
