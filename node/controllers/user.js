var express =require("express");
var mongoose=require("mongoose");
// var bodyParser=require("body-parser")
var route=express.Router()
// var http = require('http');
 var app = express();   
// var server = http.createServer(app);


const bodyParser=require("body-Parser")
app.use(bodyParser.urlencoded({extended:true},{useNewUrlParser: true},{ useUnifiedTopology: true}))
var parseUrlencoded= bodyParser.json;

route.get("/login",function(request,response){

    mongoose.model("users").find(function(err,data){
      response.json(data)

    })
  
  })




//   route.post("/signup",parseUrlencoded,(request,response,next)=>{

    
//     var postModel= new mongoose.model("users");
//     var post=new postModel();
//     post.name=request.body.name;
//     post.phone=request.body.phone;
//     post.email=request.body.email;
//     post.password=request.body.password;

// console.log("test")

//     post.save(function(err,data){
//       response.json(data)

//     })
    
    
// });





    
    
   

 module.exports=route;