var cccControllers = angular.module('cccControllers', []);

cccControllers.controller('CardListCtrl', ['Cards',
  function(Cards) {
    var self = this;

    Cards.getList().then(function(response){
      self.cards = response.data;
    });

    self.showCard = function(card){
      self.card = card;
    };

    self.cardIsSet = function(card){
      return self.card === card;
    };
  }
]);
