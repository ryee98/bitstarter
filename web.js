var express = require('express');
var fs = require('fs');
var infile = "index.html";
var buf = new Buffer(1024);
fs.readFileSync(infile, buf);  
console.log("Script: " + __filename + "\nRead: " + buf);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send("Hi richard");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
