/// <reference path="../../typings/angularjs/angular.d.ts"/>
var app = angular.module ('todo', ['ui.router']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url:'/home',
				templateUrl: '/home.html',
				controller: 'HomeCtrl',
				resolve: {
					getUsers: ['users', function(users) {
						return users.getAll();
					}],
					getTasks: ['tasks', function(tasks) {
						return tasks.getAll();
					}]
				}				
			});
		$urlRouterProvider.otherwise('home');
	}
]);

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
	return t;
}]);

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
		$scope.addUser = function() {
			if (!$scope.name || $scope.name === '' ||
				!$scope.email || $scope.email === '') { return ;}
			users.create({
				name: $scope.name,
				email: $scope.email
			});
			$scope.name = '';
			$scope.email = '';
		};
	}
]);