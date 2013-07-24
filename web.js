var express = require('express');
var app = express();
var fs = require('fs');
var file = 'index.html'
var buf = fs.readFileSync(file);
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
