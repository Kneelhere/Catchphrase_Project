var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Catchphrase_Project_app");

module.exports.Phrases = require("./phrases");