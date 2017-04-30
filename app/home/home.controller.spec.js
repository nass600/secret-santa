import home from './home.module'

describe('Controller: Home', function () {
  let $controller, $httpBackend

  beforeEach(angular.mock.module(home))

  beforeEach(angular.mock.inject(function ($injector) {
    $controller = $injector.get('$controller')
    $httpBackend = $injector.get('$httpBackend')
    $httpBackend.when('GET', '/matches').respond(200, [{}, {}, {}])
  }))

  it('matches are empty by default', function () {
    let ctrl = $controller('HomeCtrl')
    expect(ctrl.matches.length).toBe(0)
  })

  it('should get matches from the server', function () {
    let ctrl = $controller('HomeCtrl')
    ctrl.generateMatches()
    $httpBackend.flush()
    $httpBackend.expectGET('/matches')
    expect(ctrl.matches.length).toBe(3)
  });
})
