var db = require('./models');

var phrasesList = [
	{word: "Jquery", definition: "a cross-platform JavaScript library designed to simplify the client-side scripting of HTML"},
	{word: "HTML", definition: "Hypertext Markup Language"},
	{word: "JSON", definition: "a lightweight data-interchange format"}
];

db.Phrases.remove({}, function(err, phrases){
	db.Phrases.create(phrasesList, function(err, phrases){
		if(err) {return console.log(err)};
		console.log("You created ", phrases, "phrases.");
		process.exit();
	})
});