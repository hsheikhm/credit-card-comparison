var cccServices = angular.module('cccServices', []);

cccServices.factory('Cards', ['$http',
  function($http){
    return {
      getList: function() {
        return $http.get('cards/cards.json');
      }
    };
  }
]);
