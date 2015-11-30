var express = require('express');
var app = express();

app.use(express.static('./'));

var server = app.listen(3001);
console.log("Polling server is running at 'http://localhost:3000'");