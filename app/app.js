'use strict';

// Declare app level module which depends on views, and components
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

});
