describe('cccApp', function() {

  it('should redirect index.html to index.html#/cards', function() {
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
      expect(url).toEqual('/cards');
    });
  });

  describe('Card list view', function() {

    beforeEach(function() {
      browser.get('app/index.html#/cards');
    });

    it('should list cards in order of APR rate, from lowest to highest', function() {

      var cardListApr = element.all(by.repeater('card in cardCtrl.cards').column('card.apr'));

      function getAprRates() {
        return cardListApr.map(function(elm) {
          return elm.getText();
        });
      }

      expect(getAprRates()).toEqual([
        "17.4% APR", "18.9% APR", "22.9% APR", "28.2% APR"
      ]);

    });

  });

  describe('Card detail view', function() {

    beforeEach(function() {
      browser.get('app/index.html#/cards');
      element.all(by.css('.card-header div p')).first().click();
    });

    it("clicking on a card's name should show the card's image", function() {
      var cardImageUrl = 'http://localhost:8000/app/img/CARD_315.png';
      expect(element(by.css('.card-image img')).getAttribute('src')).toMatch(cardImageUrl);
    });

    it("clicking on a card's name should show the card's description", function() {
      var cardDescription = "Earn 3% Rewards in all supermarkets until 31st December (0.5% at their petrol stations).";
      expect(element(by.css('.card-info')).getText()).toEqual(cardDescription);
    });

    it("clicking on a card's name should show the card's cashback rate", function() {
      var cardCashback = "£50.10";
      expect(element(by.css('.cashback-value p')).getText()).toEqual(cardCashback);
    });

  });

});
