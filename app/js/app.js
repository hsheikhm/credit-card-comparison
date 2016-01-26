var cccApp = angular.module('cccApp', [
  'ngRoute',
  'cccControllers',
  'cccServices'
]);

cccApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cards', {
        templateUrl: 'partials/card-list.html',
        controller: 'CardListCtrl'
      }).
      otherwise({
        redirectTo: '/cards'
      });
  }
]);
