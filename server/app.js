var express = require('express');
var app = express();
var path = require('path');


// serve static files
app.use(express.static(path.resolve('./server/public')));

// server index file
// app.get('/info', function(req, res) {
//     res.send("hello from the server");
// });

app.use('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

// app.get( '/', function( req, res )
// {
//
// });
//
// app.post( '/', function( req, res ) {
//
// });

app.listen(3007, function() {
  console.log("server running, check localhost:3007");
});
