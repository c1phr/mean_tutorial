##  AngularJS

Now we can start adding Angular code to `angularApp.js`. Start by instantiating the Angular module:

	var app = angular.module('todo', ['ui.router']);
	
This creates a new Angular module called "todo" and injects the "ui.router" module that we're going to use later. Now let's make 
our first controller.

	app.controller('HomeCtrl', [
		'$scope',		
		function($scope) {
			$scope.text = "Hello, world!";			
		}
	]);

I know this isn't terribly exciting yet, but let's make sure everything works.