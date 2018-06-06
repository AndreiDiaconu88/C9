var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
})

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig:"Oink",
        cow:"Mooo",
        dog: "Woof!"
    }
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound)
})

app.get("/repeat/:noise/:number", function(req, res) {
    var noise = req.params.noise;
    var number = Number(req.params.number);
    var result = "";
    for(var i=0; i<number; i++){
            result += noise + " ";
    }
    res.send(result);
})


app.get("*", function(req, res) {
    res.send("Page not found.");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!")
}); 