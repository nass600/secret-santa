import angular from 'angular'
import uiRouter from 'angular-ui-router'
import config from './app.config'
import home from './home/home.module'

import '../assets/scss/app.scss'

angular.module('app', [uiRouter, home]).config(config)
