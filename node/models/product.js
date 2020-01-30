var mongoose = require('mongoose');
 
// var Schema = mongoose.Schema;

// var mobile = new Schema({
//   // img: String,
//   name: String,
//   // discription: String,
//   // price:Number,
//   catigory:String,
// });

// mongoose.model("mobiles",mobile);


// var Schema = mongoose.Schema;

// var laptop = new Schema({
//   img: String,
//   name: String,
//   discription: String,
//   price:Number,
//   catigory:String,
// });

// mongoose.model("laptop",laptop);


var Schema = mongoose.Schema;

var camera = new Schema({
  // img: String,
  name: String,
  discription: String,
  // price:Number,
  // catigory:String,
});

mongoose.model("camera",camera);