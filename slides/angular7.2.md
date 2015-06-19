##  How do we use the factory?

Now replace your home controller with the following code:

	app.controller('HomeCtrl', [
		'$scope',
		'users', // Inject the users factory
		function($scope, users) {
			$scope.users = users.users; // Put the users into scope
			// Expose an addUser function to the client
			$scope.addUser = function() {
				// Do some really basic validation
				if (!$scope.name || $scope.name === '' ||
					!$scope.email || $scope.email === '') { return ;}
				// Call the create function in the factory
				users.create({
					name: $scope.name,
					email: $scope.email
				});
				// Clear scope variables
				$scope.name = '';
				$scope.email = '';
			};
		}
	]);
	
Our last step is to write the front-end template to work with users, press the down arrow to continue.