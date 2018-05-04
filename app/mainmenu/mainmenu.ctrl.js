angular.module('myApp')
.controller('MainMenuCtrl', function() {

    var menu = this;
    menu.hello = 'Hello from main menu ctrl';

    menu.items = [
      { title: 'View 1', link: 'view1' },
      { title: 'View 2', link: 'view2' },
      { title: 'My account', link: 'myaccount' }
    ];
});
