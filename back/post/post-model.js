var mongoose = require("mongoose");

const schPost = mongoose.Schema({
	title: {type: String, required: true},
	text: {type: String, required: true},
	author: String
});

mongoose.model("Post", schPost);