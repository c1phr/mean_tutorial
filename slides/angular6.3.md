##  Factories

	u.create = function(user) {
		return $http.post('/users', user).success(function(data) {
			u.users.push(data);
		});
	};

Just like we did with the GET request, this added a function to the factory that will create a new user by POSTing it to the server.
If that's successful, it adds the response to the user array so we can use it later.