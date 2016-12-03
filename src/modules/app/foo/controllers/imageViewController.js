'use strict';

module.exports = /*@ngInject*/
  function imageViewController($scope, $routeParams, $http) {
    $scope.image = {};
    $http.get("http://jsonplaceholder.typicode.com/photos/" + $routeParams.id)
      .then(function (res) {
        Object.assign($scope.image, {
          albumId: res.data.albumId,
          id: res.data.id,
          thumbnailUrl: res.data.thumbnailUrl,
          title: res.data.title,
          url: res.data.url
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    $http.get("http://jsonplaceholder.typicode.com/photos")
      .then(function (res) {
        angular.forEach(res.data, function (value, key) {
          if (value.id == $routeParams.id) {
            Object.assign($scope.image, {
              prev: (key !== 0 ? res.data[(key - 1)].id : null),
              next: (key < res.data.length - 1 ? res.data[(key + 1)].id : null)
            });
          }
        });
      })
      .catch(function (error) {

      });
  };
