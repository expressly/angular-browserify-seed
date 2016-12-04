'use strict';

module.exports = /*@ngInject*/
  function mainController($scope, $http) {
    $http.get("http://jsonplaceholder.typicode.com/photos")
      .then(function (res) {
          $scope.images = res.data.slice(0, 40);
        }
      )
      .catch(function (error) {
        console.log(error);
      });

    $scope.loadMore = function () {
      $http.get("http://jsonplaceholder.typicode.com/photos")
        .then(function (res) {
            var last = $scope.images.length;
            $scope.images.push(res.data.slice(last, last + 40));
          }
        )
        .catch(function (error) {
          console.log(error);
        });
    };
  };
