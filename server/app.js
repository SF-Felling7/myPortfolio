var express = require('express');
var app = express();
var path = require('path');


var port = process.env.PORT || 3007;

// server static files
app.use(express.static(path.resolve('./server/public')));

//route to index.html
app.use('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

//Spin up Server
app.listen(3007, function() {
  console.log("server running, check localhost:3007");
});
