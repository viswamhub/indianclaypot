const express = require("express");
const https = require("https");
const app = express ();
const request = require("request");
const path = require("path");

app.use(express.static(path.join(__dirname, '/')));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/",function(request,res){
    res.sendFile(__dirname + "/index.html")
})

app.get('/gallery', function (req, res,html) {
    res.sendFile(path.join(__dirname+'/gallery.html'));
   });


app.listen(process.env.PORT || 3000, function(){
    console.log("server is running on port 3000");
})