var express = require("express");
var bodyParser = require("body-parser");
var mongoClient = require("mongodb").MongoClient;

var app = express();
var jsonParser = bodyParser.json();
var url = "mongodb://localhost:27017/regexp";

var sms=[];

app.use(express.static(__dirname + "/public"));

app.listen(3000, function(){
    console.log("Server starting at host 3000...");
});
