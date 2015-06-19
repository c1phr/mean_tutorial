##  Let's see some tasks

Before we can start creating tasks, we need a way to view and add users, and we're going to do this with an Angular factory.
Insert this below your `app.config()`.

	app.factory('users', ['$http', function($http) {
		var u = {
			users: []
		};
		u.getAll = function() {
			return $http.get('/users').success(function(data) {
				angular.copy(data, u.users);
			});
		};
		u.create = function(user) {
			return $http.post('/users', user).success(function(data) {
				u.users.push(data);
			});
		};
		return u;
	}]);

Scroll down for an explanation of what's going on here.