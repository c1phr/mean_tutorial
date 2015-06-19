##  Tasks

	app.controller('HomeCtrl', [
		'$scope',
		'users',
		'tasks',
		function($scope, users, tasks) {
			$scope.users = users.users;
			$scope.tasks = tasks.tasks;
			$scope.addTask = function() {
				if (!$scope.title || $scope.title === '' || 
					!$scope.description || $scope.description === '' ||					
					!$scope.creator || $scope.creator === '') { return ; }
				tasks.create({
					title: $scope.title,
					description: $scope.description,					
					creator: $scope.creator
				});
				$scope.title = '';
				$scope.description = '';				
				$scope.creator = '';
			};
			$scope.addUser = // Removed for brevity
	]);

> I apologize for the scrolling, but most of this is pretty much the same as we did for users, just with the task fields instead. 
Now we just have the front-end to take care of.