'use strict';
var express = require('express'),
    app = express();
var http = require('http').Server(app);
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

console.log('dirname', __dirname);
app.use(express.static(__dirname));
var server = app.listen('3000', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at port:' + port);
});