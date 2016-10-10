// inits express server
var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;

var path = require('path');

// uses any static files required by the html files.
app.use(express.static('./public/'));



app.get('/', function(req, res){

	res.sendFile(path.join(__dirname + './public/html/index.html'));

})


// server listeing for requests
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});
