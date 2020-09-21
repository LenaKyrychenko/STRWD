var express = require('express');
// var expressWinston = require('express-winston');
var winston = require('winston');
var app = express();
function getLogger(module) {
var path = module.filename.split('/').slice(-2).join('/');
//отобразим метку с именем файла, который выводит сообщение
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