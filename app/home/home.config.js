config.$inject = ['$stateProvider']

export default function config ($stateProvider) {
  $stateProvider.state('app', {
    url: '/',
    template: require('./home.html'),
    controller: 'HomeCtrl as home'
  })
}
