var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient:true});

// schema setup:

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = new mongoose.model("Campgound", campgroundSchema);

Campground.create({
    name: "random Camp 1", 
    image: url + "camp,water"
}, function(err, campground){
    if(err){
        console.log("Error");
    }else{
        console.log("New campground created")
        console.log(campground)
    }
});
    

var url   = "https://source.unsplash.com/featured/?";
var campgrounds = [
        {name: "random Camp 1", image: url + "camp,water" },
        {name: "random Camp 2", image: url + "camp,forrest"}, 
        {name: "random Camp 3", image: url + "forrest,camp"} 
        ];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
})

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground= {name:name, image:image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
})

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started.")
})