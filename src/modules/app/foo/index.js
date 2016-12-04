'use strict';

module.exports =
  angular.module('expressly.foo', ['infinite-scroll'])
    .config(require('./routes.js'))
    .config(require('./i18n/en.js'))
    .controller('barController', require('./controllers/bar.controller'))
    .controller('imageViewController', require('./controllers/imageViewController'))
    .controller('mainController', require('./controllers/mainController'))
    .controller('albumController', require('./controllers/albumController'));
