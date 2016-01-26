var cccApp = angular.module('cccApp', [
  'ngRoute',
  'ngResource',
  'cccControllers',
  'cccServices'
]);

cccApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cards', {
        templateUrl: 'partials/card-list.html'
      }).
      otherwise({
        redirectTo: '/cards'
      });
  }
]);
