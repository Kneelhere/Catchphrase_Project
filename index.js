// REQUIRED APPS 
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var _= require("underscore");
var views = path.join(process.cwd(), "views/");
var db = require('./models');

// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", function(req,res){
	res.sendFile(path.join(views + 'index.html'));
})

app.get("/phrases", function(req,res){
	db.Phrases.find({}, function(err, phrasesList){
		if(err){
			console.log(err);
			return res.sendStatus(400);
		}
		res.send(phrasesList);
	})
});

app.post("/phrases", function create(req,res){
	var newPhrase = req.body;
	db.Phrases.create(newPhrase, function(err,phrase){
		if(err) {
			console.log(err);
			return res.sendStatus(400);
		}
	res.send(phrase);
	})
});

app.delete("/phrases/:id", function destroy (req, res){
  var id = req.params.id;
  db.Phrases.remove({_id: id}, function(err, food){
    if(err) {
      console.log(err);
      return res.sendStatus(400);
    }
  res.sendStatus(200);
  });

});


app.listen(3000, function(){
	console.log("listening on port 3000");
});