##  Tasks

Don't forget to include a new resolve callback to populate tasks when the controller is loaded.

	resolve: {
		getUsers: ['users', function(users) {
			return users.getAll();
		}],
		getTasks: ['tasks', function(tasks) {
			return tasks.getAll();
		}]
	}	

And of course we need to add some additional components to our controller. There's a lot of code there, so that gets the next 
slide all to itself.