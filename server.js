// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    if(req.body.operations === "+") {
        var result = num1 + num2;
    } else if(req.body.operations === "-") {
        var result = num1 - num2;
    } else if(req.body.operations === "*") {
        var result = num1 * num2;
    } else {
        var result = num1 / num2;
    }
    res.send(result + "");
});

app.listen(3000, function() {
    console.log("server is listening on port 3000");
});