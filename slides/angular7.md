##  How do we use the factory?

Now that the factory is all ready to go, we just need to put it into the home controller to expose it to the front-end.

In the `app.config()` add the following resolve handler under the controller in the home state:

	controller: 'HomeCtrl',
	resolve: {
		getUsers: ['users', function(users) {
			return users.getAll();
		}]

This will cause all users to be loaded when loading the home state, so they're pre-populated. Scroll down to continue.