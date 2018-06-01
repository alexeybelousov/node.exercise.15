'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('#!/view1');
    });

    // ui-view replaced to ng-view
    it('should render view1 when user navigates to /view1', function() {
      // expect(element.all(by.css('[ui-view] p')).first().getText()).
      //   toMatch(/partial for view 1/);

      const list = element.all(by.repeater('pokemon in pokemons'));

      console.log(list.last());

    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ui-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
