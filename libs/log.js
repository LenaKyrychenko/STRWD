var express = require('express');
var winston = require('winston');
var app = express();
function getLogger(module) {
var path = module.filename.split('/').slice(-2).join('/');
	return new winston.createLogger({
		transports : [
			new winston.transports.Console({
				colorize: true,
				level: 'debug',
				label: path
			})
		]
	});
}
module.exports = getLogger;