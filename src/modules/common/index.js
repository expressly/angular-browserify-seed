'use strict';

module.exports =
  angular.module('expressly.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
