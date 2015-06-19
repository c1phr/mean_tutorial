##  Factories

	app.factory('users', ['$http', function($http) {
		var u = {
			users: []
		};
		
This creates the factory called `users` and injects the `$http` module to take care of performing HTTP requests for us. Inside the 
factory we start an object called `u` for sake of simplicity, and start it with an empty array of users.
		
	u.getAll = function() {
		return $http.get('/users').success(function(data) {
			angular.copy(data, u.users);
		});
	};
		
Then we add a function to the object to get all users from the API with `$http.get()` and then use `angular.copy()` to copy those users into 
the empty array instantiated earlier.