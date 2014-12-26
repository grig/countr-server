var express = require('express');
var app = express();

var count = 0;
app.get('/counter', function(req, res) {
  res.json({count: count});
});

app.post('/counter', function(req, res) {
  count += 1;
  res.json({count: count});
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Countr server listening at http://%s:%s', host, port);
});
