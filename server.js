var express = require('express');
var getPalette = require('./lib/getPalette');

var app = express();

app.set('view engine', 'jade');

app.get("/", function (req,res) {
    res.render('index.jade', {palette: getPalette()});
});

function getPalette () {
    return ["#127189", "#ff5246", "#75d709"];
}

app.listen(8000);
