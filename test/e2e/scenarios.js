describe('cccApp', function() {

  it('should redirect index.html to index.html#/cards', function() {
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
      expect(url).toEqual('/cards');
    });
  });


});
