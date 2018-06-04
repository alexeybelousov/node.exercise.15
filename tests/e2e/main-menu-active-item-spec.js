'use strict';

describe('Main menu', function() {

  beforeEach(function() {
    browser.get('#/view2');
  });

  it('should set active class to menu item related to current page', function() {

    let item = element(by.className('active'));
    expect(item.getText()).toBe('View 2');

  });

});
