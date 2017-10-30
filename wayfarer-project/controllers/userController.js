var db = require('../models');

//all
function index(req,res) {
  db.User.find({}, function(err, allUsers){
    res.json(allUsers);
  });
};


module.exports = {
  index: index,
}
