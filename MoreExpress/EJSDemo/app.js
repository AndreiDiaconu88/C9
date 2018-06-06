var express = require("express");
var app = express();

app.use(express.static("public")); // ii spunem serverului sa se uite in folderul public creat
app.set("view engine", "ejs")// ii spunem serverului ca in view folosim doar ejs si  NU mai trebuie sa punem extensia de fiecare data in randare


app.get("/", function(req, res){

    res.render("home");
})

app.get("/fallinlovewith/:thing", function(req, res){
    var thing  = req.params.thing;
    
    res.render("love", {thingVar: thing}) // in render trebuie sa initializam noile variabile ce iau valorile dinn app.js si vor ffolosite in template
})


app.get("/posts", function(req, res) {
    var posts = [
        {title:"This is impossible!", author:"Andrei"},
        {title:"TThe fastest car in the world", author:"Serban"},
        {title:"You won't be able to watch it!", author:"Peter"}
        ];
    res.render("posts", {posts: posts })
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is lintening!");
})