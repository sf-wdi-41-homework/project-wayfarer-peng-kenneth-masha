var db = require('../models');

function allPosts(req, res){
  db.Post.find(function postList(err, succ){
    res.json(succ)
  })
}

function personalPosts(req, res){
  db.Post.find({userId: req.user._id}, function postList(err, succ){
    res.json(succ)
  })
}

function createPost(req, res) {

  console.log(req.body);
  var newPost = new db.Post({
    userId:req.user._id,
    location: req.body.location,
    title: req.body.title,
    details: req.body.details,
    img: ""
  });

  newPost.save(function(err, yay){
    if(err){return console.log(err)};
    res.json(yay)
  });
}

module.exports = {
  createPost: createPost,
}
