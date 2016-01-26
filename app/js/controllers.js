var cccControllers = angular.module('cccControllers', []);

cccControllers.controller('CardListCtrl', ['Cards',
  function(Cards) {
    var self = this;

    Cards.getList().then(function(response){
      self.cards = response.data;
    });
  }
]);
