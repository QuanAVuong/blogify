// IMPORTS
const express = require("express");
const app = express(); // instance "app" Express object
// console.log('app', app)

const mongoose = require("mongoose");
// console.log('mongoose', mongoose);


// MODELS
const postModel = require("./post/post-model.js");
const Post = mongoose.model("Post");
// console.log('Post', Post);

// Root path
const path = require("path");
const rootPath = path.join(__dirname, "..");
// console.log('rootPath', rootPath)

const bodyParser = require("body-parser");
// console.log('bodyParser', bodyParser)

mongoose.connect("mongodb://localhost/blogify");
const db = mongoose.connection;
// console.log('db', db)

// Making bodyParser and static bundle.js available to app
app.use(bodyParser.urlencoded( { extended: true } ) )
app.use(express.static( `${rootPath}/bundle` ) )


// API
// Get all posts:



db.on("open", () => {
	app.listen(3000, () => {
		console.log("Express server: app, is listening to port 3000");
	})
})

db.on("error", () => {
	console.error('db error');
})