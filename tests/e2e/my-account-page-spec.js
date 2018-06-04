'use strict';

describe('My account page', function() {

  beforeEach(function() {
    browser.get('#/myaccount');
  });

  describe('should has', function() {

    it('form', function() {
      expect(element(by.css('form')).isPresent()).toBe(true);
    });


    let name = element(by.model('vm.name'));
    let email = element(by.model('vm.email'));
    let phone = element(by.model('vm.phone'));

    it('name input with requared attribute', function() {
      expect(name.getAttribute('required')).toEqual('true');
    });

    it('email input with requared attribute', function() {
      expect(email.getAttribute('required')).toEqual('true');
    });

    it('phone input without requared attribute', function() {
      expect(phone.getAttribute('required')).toEqual(null);
    });

  });
});
