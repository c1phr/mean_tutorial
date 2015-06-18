## Creating Tasks

Now we have a way to get tasks, but we need a way to put some tasks in our database before we can take them out! 
Time for a POST request.

Add this below your new GET request:

<pre><code data-trim>
router.post('/tasks', function(req, res, next) {
 	// Create a new task object with request data
	var task = new Task(req.body);
	// Try to save the task object to the database
	task.save(function(err, task) {
		if (err){ return next(err); } // Error handling
		res.json(task); // Return the new task object
	});
});
</pre></code>

Now you have a way to insert new tasks to the database, and we can get a list of tasks back from the database,
but what about getting the details of a single task?