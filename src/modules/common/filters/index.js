'use strict';

module.exports =
    angular.module('expressly.common.filters', [])
        .filter('exampleFilter', require('./example.filter'));
