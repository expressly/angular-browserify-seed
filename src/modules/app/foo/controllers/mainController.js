'use strict';

module.exports = /*@ngInject*/
  function mainController($scope, $http) {
    var amount = 40;
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
            $scope.images = $scope.images.concat(res.data.slice(amount, amount += 10));
          }
        )
        .catch(function (error) {
          console.log(error);
        });
    };
  };
