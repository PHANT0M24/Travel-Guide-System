const express = require("express");
const app = express();

// "/" main domain

app.get("/",function(req, res){
    res.send("Hello World")
});

app.listen(8000)