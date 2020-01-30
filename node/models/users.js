var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;

var users = new Schema({
  name: String,
  phone:String,
  email:String,
  password:String
});
mongoose.model("users",users);
