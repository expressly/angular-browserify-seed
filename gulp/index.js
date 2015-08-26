'use strict';

var fs = require('fs');
var argv = require('yargs').argv;
var tasks = fs.readdirSync('./gulp/tasks/');

require('./config');

// --release flag when executing a task
global.release = argv.release;
global.staging = argv.staging;

tasks.forEach(function (task) {
    require('./tasks/' + task);
});
