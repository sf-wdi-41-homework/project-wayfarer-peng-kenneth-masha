var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  userId: String,
  location: String,
  title: String,
  details: String,
  img: String
});

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;
