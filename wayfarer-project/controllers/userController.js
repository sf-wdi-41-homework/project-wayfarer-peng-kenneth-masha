var db = require('../models');

//all
function index(req,res) {
  db.User.find({}, function(err, allUsers){
    res.json(allUsers);
  });
};

function update (req, res){
  db.User.findOne({_id:req.params.id}, function(err,success){
    console.log(success)
    success.img=req.body;
    if(err){return}
    success.save(function(err, update){
        if(err){return}
        console.log(update)
        res.json(update);
      })

    });
  };

function joinDate(req, res){
  db.User.findOne({_id: req.params.id}, function(err, success){
    console.log(success)
    res.json(success)
  })
}



module.exports = {
  index: index,
  update: update,
  joinDate: joinDate,
}
