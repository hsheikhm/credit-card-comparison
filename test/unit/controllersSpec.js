describe('cccApp controllers', function(){

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('cccApp'));
  beforeEach(module('cccServices'));

  describe('CardListCtrl', function(){

    var httpBackend, ctrl;

    beforeEach(inject(function($httpBackend, $controller){
      httpBackend = $httpBackend;
      httpBackend.expectGET("cards/cards.json")
      .respond(cardsList);

      ctrl = $controller('CardListCtrl');
    }));

    var cardsList = [
      {
        "code":"CARD_274",
        "name":"Barclaycard Platinum Credit Card",
        "apr":22.9,
        "cashback":120.00,
        "information":"5% cashback during your first 3 months up to £2,000 in purchases (T&C's Apply)."
      },
      {
        "code":"CARD_822",
        "name":"Virgin Money Credit Card",
        "apr":28.2,
        "cashback":106.25,
        "information":"5% cashback in first 3 months up to £125 (on the first £2,500 of purchases). After the first three months ongoing cashback is paid at 1.25%."
    }];

    it("should create a 'cards' model that contains a list of cards", function(){
      expect(ctrl.cards).toBeUndefined();
      httpBackend.flush();
      expect(ctrl.cards).toEqualData(cardsList);
    });

    it("should create a 'card' model once a card has been clicked on", function(){
      expect(ctrl.card).toBeUndefined();
      ctrl.showCard("card");
      expect(ctrl.card).toEqualData("card");
    });

    it("should check if a 'card' model has already been set", function(){
      expect(ctrl.cardIsSet("card")).toEqual(false);
      ctrl.showCard("card");
      expect(ctrl.cardIsSet("card")).toEqual(true);
    });

  });

});
