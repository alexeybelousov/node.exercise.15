'use strict';

// Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.account',
  'myApp.version',
  'ngMessages'
]).
config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/view1");

				$stateProvider.state("view1", {
					url: "/view1",
					controller: 'View1Ctrl',
					templateUrl: 'view1/view1.html'
				}).state("view2", {
					url: "/view2",
					controller: 'View2Ctrl',
					templateUrl: 'view2/view2.html'
				}).state("myaccount", {
					url: "/myaccount",
					controller: 'MyAccountCtrl',
					templateUrl: 'account/account.html'
				});
  // $stateProvider
  //   .state('view1', {
  //     url: '/view1',
  //     template: '<h1>about</h1>'
  //   })
  //   .state('view2', {
  //     url: '/view2',
  //     template: '<h1>login</h1>'
  //   })
  //   .state('home', {
  //     url: '/:city',
  //     controller: function($scope, $stateParams) {
  //       $scope.stateCity = $stateParams.city
  //     },
  //     template: '<h1>city - {{stateCity}}</h1>'
  //   })
});
