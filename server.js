
var express = require('express'),
	app = express();

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

// loading project module
var init = require('./scripts/app.js');
// passing project module the express module
init(app);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);
