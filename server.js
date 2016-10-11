// inits express server
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

// init Web Socktet
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');

// uses any static files required by the html files.
app.use(express.static('./public/'));

//=====================
//socket stuff
io.on('connection', function(socket){

	console.log('socket connected');
	
	// when client socket side disconnects
	  socket.on('disconnect', function(){
	  		
	  	console.log('socket disconnected');
	  });

});
	
//=====================



app.get('/', function(req, res){

	res.sendFile(path.join(__dirname + './public/index.html'));

})



// server listeing for requests
http.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});
