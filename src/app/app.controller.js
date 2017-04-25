'use strict';

/**
 * Main application controller
 *
 * @class AppCtrl
 * @author Ignacio Velazquez <ivelazquez85@gmail.com>
 */
(function () {
  angular.module('app').controller('AppCtrl', function ($scope, $http) {

    /**
     * Asks for matches to the server
     */
    $scope.unveil = function () {
      $scope.matches = [];
      $http({
        method: 'GET',
        url: '/generate'
      }).then(function successCallback(response) {
        $scope.matches = response.data;
      }, function errorCallback(response) {
        $scope.error = response;
      });
    }
  });
})();
