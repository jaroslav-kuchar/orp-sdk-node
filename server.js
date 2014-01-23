/**
 * @author Jaroslav Kuchar
 * ORP server
 */

var express = require('express');
var routes = require('./controller');
var app = express();

// inject port number
var port = 8080;
if (process.argv[2]) {
	port = process.argv[2];
}

// Configuration
app.configure(function() {
	app.use(express.bodyParser());
	app.use(express.compress());
});

// routes
app.post('/', routes.controller);

// listen and start
app.listen(port, function() {
	console.log("ORP listening on: " + port);
});

// end
process.on('SIGINT', function() {
	console.log('\nshutting down from  SIGINT (Crtl-C)');
	//mongoose.disconnect();
	process.exit();
});
