var express = require('express');
var fs = require('fs');
var infile = "index.html";
var buf = new Buffer(1024);
var content = fs.readFileSync(infile);  
//console.log("Script: " + __filename + "\nRead: " + buf);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
