'use strict';

module.exports = /*ngInject*/
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "app/foo/templates/main.html",
        controller: "mainController"
      })
      .when("/image/:id", {
        templateUrl: "app/foo/templates/image-view.html",
        controller: "imageViewController"
      })
      .otherwise({
        redirectTo: '/'
      });
  };
