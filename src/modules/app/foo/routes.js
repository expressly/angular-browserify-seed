'use strict';

module.exports = /*ngInject*/
    function ($routeProvider) {
        $routeProvider
            .when('/bar', {
                templateUrl: 'app/foo/templates/bar.html',
                controller: 'barController'
            })
            .otherwise({
                redirectTo: '/bar'
            });
    };