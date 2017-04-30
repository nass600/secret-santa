import angular from 'angular'
import uiRouter from 'angular-ui-router'

import config from './home.config'
import HomeCtrl from './home.controller'

export default angular.module('app.home', [uiRouter])
  .config(config)
  .controller('HomeCtrl', HomeCtrl)
  .name
