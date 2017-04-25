'use strict';

/**
 * Main angular app
 *
 * @class app
 * @author Ignacio Velazquez <ivelazquez85@gmail.com>
 */
(function () {
  angular.module('app', [
    'ui.router'
  ]).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('app', {
      url: '/',
      templateUrl: 'app/app.html',
      controller: 'AppCtrl'
    });

  });
})();
