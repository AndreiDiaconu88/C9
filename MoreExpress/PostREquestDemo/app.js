var express = require("express"); // npm install express --save
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: true}));  // pt install: npm install body-parser --save

app.set("view engine", "ejs"); //npm install ejs --save

var friends = ["Alex", "Andrei", "Tony"];

app.get("/", function(req, res){
    res.render("home");
})

app.get("/friends", function(req, res){

    res.render("friends", {friends: friends});
})

app.post("/addfriend", function(req, res){
    var newfriend = req.body.friend; //friend vine de la input name din friends.ejs
    friends.push(newfriend);
    res.redirect("/friends")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is listening!");
})