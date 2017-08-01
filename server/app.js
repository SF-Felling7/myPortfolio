var express = require('express');
var app = express();
var path = require('path');


// serve static files
app.use(express.static(path.resolve('./server/public')));


app.use('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

//Spin up Server
app.listen(3007, function() {
  console.log("server running, check localhost:3007");
});
