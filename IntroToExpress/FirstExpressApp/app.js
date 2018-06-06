var express  = require("express");
var app = express();


// "/" => "hi!!"
// "/bye" => "dog"
// "/dog"=> "ham";

app.get("/", function(req, res){
    res.send("hi!!");
})

app.get("/dog", function(req, res){
    res.send("A dog is barking")
})

app.get("/bye", function(req, res){
    res.send("Goodbye")
})

app.get("*", function(req, res) {
    res.send("you are a star");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!")
}); // express listens to a praticular port from c9 server with a particular IP