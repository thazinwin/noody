var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var routes = require('./routes/index');

app.use(bodyParser());

var port = process.env.PORT || 8080;

var mongoose   = require('mongoose');
//mongoose.connect('mongodb://root:root@ds041218.mongolab.com:41218/noody')
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database


var Bear   = require('./app/models/bear');

var router = express.Router();

app.use('/api', routes);

app.listen(port);
console.log('Magic happens on port ' + port);
