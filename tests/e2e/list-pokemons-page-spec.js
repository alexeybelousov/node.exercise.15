'use strict';

describe('Pokemon page', function() {

  beforeEach(function() {
    browser.get('#/view1');
  });

  it('should has 5 elements', function() {
    const list = element.all(by.repeater('pokemon in pokemons'));
    expect(list.count()).toBe(5);
  });

});
