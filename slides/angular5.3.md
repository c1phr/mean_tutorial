##  What else do I need to make this work?

There are a few more tweaks that need to be made to the `angularApp.js` file before this will work.

Before declaring your controller, add the configuration to the app:

	app.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('home', {
					url:'/home',
					templateUrl: '/home.html',
					controller: 'HomeCtrl',				
				});
			$urlRouterProvider.otherwise('home');
		}
	]);
	
This sets up the `/home` route and points it at the `home.html` template, populated by the `HomeCtrl` controller.