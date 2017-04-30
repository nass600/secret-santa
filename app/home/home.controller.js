import moment from 'moment'

export default class HomeCtrl {
  constructor ($http) {
    this.$http = $http
    this.year = moment().format('YYYY')
    this.matches = []
  }

  generateMatches () {
    let self = this
    this.matches = []

    this.$http({
      method: 'GET',
      url: '/matches'
    }).then(function successCallback (response) {
      self.matches = response.data
    }, function errorCallback () {
      self.error = 'Something wrong happened!'
    })
  }
}

HomeCtrl.$inject = ['$http']
