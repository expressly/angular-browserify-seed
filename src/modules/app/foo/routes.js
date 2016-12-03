'use strict';

module.exports = /*ngInject*/
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "app/foo/templates/image-view.html",
        controller: "imageViewController"
      })
      .otherwise({
        redirectTo: '/'
      });
  };
