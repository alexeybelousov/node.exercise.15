'use strict';

describe('Redicrect to home page', function() {

  beforeEach(function() {
    browser.get('index.html');
  });

  it('Should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });

});
