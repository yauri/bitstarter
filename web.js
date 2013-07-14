var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
  var fs = require('fs');
  
  var data = fs.readFileSync('index.html');
  var buffer = new Buffer(data.toString());
  response.send(buffer.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
