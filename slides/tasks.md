##  But you promised tasks

Now that we have users, we can start making tasks. 
The good news is, there's really nothing new involved here, so this is going to go quick.
First, add a factory for tasks:

	app.factory('tasks', ['$http', function($http) {
		var t = {
			tasks: []
		};
		t.getAll = function() {
			return $http.get('/tasks').success(function(data) {
				angular.copy(data, t.tasks);
			});
		};
		t.create = function(task) {
			return $http.post('/tasks', task).success(function(data) {
				t.tasks.push(data);
			});
		};
	}]);