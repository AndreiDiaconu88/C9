var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient:true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = new mongoose.model("Cat", catSchema); // se va crea o colectie/relatie cu numele din paranteza la plural (cats) automat 

var george = new Cat({  // george este doar obiectul creat din js, care se salveaza in db, dar la returnare din db va fi diferit
    name: "Philip" ,
    age: 7,
    temperament: "Evilish"
});

george.save(function(err, cat){  //se salveaza in cats noul element. La returnare din db george este de fapt cat=george + id si alte date
    if(err){
        console.log("Something went wrong");
    }else{
        console.log("A new cat was added to cats collection in the db");
        console.log(cat);
    }
});