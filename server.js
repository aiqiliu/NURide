var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;
// var majorController = require("./server/controller/major.controller");
// var schoolController = require("./server/controller/school.controller");

// mongoose.connect("mongodb://node:node@ds053784.mongolab.com:53784/prereqsmap");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/app',express.static(__dirname + "/app"));
app.use('/node_modules',express.static(__dirname + "/node_modules"));
app.use('/public',express.static(__dirname + "/public"));

app.get('/', function(req,res){
	res.sendFile(__dirname + "/public/index.html");
});

// Authentication
// app.post("/api/user/signup", authenticationController.signup);

// Major
// app.get("/api/major", majorController.findAllMajors);
// app.get("/api/major/:major_name", majorController.findByMajor);
// app.post("/api/major", majorController.createMajor);

// //School
// app.get("/api/school/:school_name", schoolController.findBySchool);

app.listen(port, function(){
	console.log("Listening on port " + port);
});