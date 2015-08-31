// REQUIRED APPS 
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

// Routes
app.get("/", function(req,res){
	res.send("Hello");
})

app.listen(3000, function(){
	console.log("listening on port 3000");
});