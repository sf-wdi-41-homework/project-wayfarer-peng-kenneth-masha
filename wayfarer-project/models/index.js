var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/react-project", { useMongoClient: true });


module.exports.User = require('./user');
module.exports.Port = require('./post');
