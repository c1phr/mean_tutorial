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
	function($scope, users) {
		$scope.users = users.users;
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