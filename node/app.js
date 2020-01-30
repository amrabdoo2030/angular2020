var express =require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser")
var route=express.Router();
// var http = require('http');
var app = express();

// var productController=require("./controllers/product");
// var adminLoginController=require("./controllers/adminLogin");
 var userController=require("./controllers/user");
// var catigoryController=require("./controllers/catigory");
// var wishListController=require("./controllers/wish-list");
// var cartController=require("./controllers/cart");

var productModel=require("./models/users");
// var adminLoginModel=require("./models/adminLogin");
// var userModel=require("./models/user");
// var catigoryModel=require("./models/catigory");
// var wishListModel=require("./models/wish-list");
// var cartModel=require("./models/cart");
//app.use(productModel)
var fs=require("fs");
// var server = http.createServer(app);
var parseUrlencoded= bodyParser.json;
app.use(bodyParser.urlencoded({extended:true}))
 
//creat my server
mongoose.connect("mongodb://127.0.0.1:27017/angular_DB");

//cross origin
app.all('*',function(request,response,next){
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader("Access-Control-Allow-Methods","Get,Post,Put,Delete");
    response.setHeader("Access-Control-Allow-Headers","Content-Type")
    next()
})
///
//app.use(express.static("public"))

//files in models
// var files_arr=fs.readdirSync(__dirname+"/models")
// files_arr.forEach(function(file){
//     require(__dirname+"./models"+file)
// });

//product
// app.use("/product",productController);

//catigory
// app.use("/catigory",catigoryController);

//sign up
 app.use("/user",userController);

//cart
// app.use("/cart",cartController);

//wishlist
// app.use("/wishList",wishListController);

//admin
// app.use("/admin",adminLoginController);

//listen
app.listen(8080,function(){
    console.log("server on port 8080");  
})