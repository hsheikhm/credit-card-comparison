describe('cccApp services, factory: Cards', function(){

  var cards;
  var httpBackend;

  beforeEach(module('cccApp'));

  beforeEach(inject(function(Cards){
    cards = Cards;
  }));

  beforeEach(inject(function($httpBackend){
    httpBackend = $httpBackend;
    httpBackend
    .when("GET", "cards/cards.json")
    .respond(cardsList);
  }));

  afterEach(function(){
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

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

  it('responds to getList', function(){
    expect(cards.getList).toBeDefined();
  });

  it('returns the list of cards', function(){
    cards.getList()
    .then(function(response){
      expect(response.data).toEqual(cardsList);
    });
    httpBackend.flush();
  });

});
