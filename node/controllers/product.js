// var express =require("express");
// var mongoose=require("mongoose");
// var bodyParser=require("body-parser")
// var route=express.Router()
// // var http = require('http');
// var app = express();   
// // var server = http.createServer(app);
// var parseUrlencoded= bodyParser.json;
// app.use(bodyParser.urlencoded({useNewUrlParser:true},{useUnifiedTopology:true},{extended:true}))

// // route.post("/addproduct",parseUrlencoded,function(Request,response){
// //   var productModel=mongoose.model("mobile");
// //   var product=new productModel();
// //   product.name=Request.body.name;
// //   product.catigory=Request.body.catigory;
// // product.save(function(err,data){
// //   response.json(data);
// //   console.log(data);
// // })
// // })
 
// route.post("/adduser",parseUrlencoded,function(Request,response){
//   var userModel=mongoose.model("user");
//   var user=new userModel();
//   user.name=Request.body.name;
//   user.save(function(err,data){
//   response.json(data);
//   console.log(data);
// })
// })

// // route.get("/mobiles",function(request,response){
// //     mongoose.model("mobile").find(function(err,data){
// //       response.json(data)
// //     })
// //    console.log("list")

// // })


// // route.get("/labtop",function(request,response){
// //   mongoose.model("laptop").find(function(err,data){
// //     response.json(data)
// //   })
// //  console.log("list")

// // })


// route.get("/camera",function(request,response){
//   mongoose.model("camera").find(function(err,data){
//     response.json(data)
//   })
// //  console.log("list")

// })
// // route.get("/productDetails/:_id",parseUrlencoded,function(request,response){
// //   var _id=request.params._id
// //   mongoose.model("product").findOne({_id:_id},function(err,data){
// //     response.json(data)
// //   })
// // })

//  module.exports=route;