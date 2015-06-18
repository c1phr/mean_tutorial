##  GET the details with params

In most APIs, getting details about an object is usually done by making a request to: `/object/identifier`. 
We can add this to our API, and Express lets us create a param object that makes it really easy to do so.

<pre><code data-trim>
router.param('task', function(req, res, next, id) {
  // Get a single task
  var query = Task.findById(id);
  // Run the query and callback
  query.exec(function (err, task) {
    if (err) { return next(err); } // Usual error handling
	// Handle when requested task is missing
    if (!task) { 
	  return next(new Error('Task not found'));
	}
    req.task = task; // Store task in request for later
    return next(); // Proceed with processing
  });
});
</pre></code>

Now whenever a route has "`:task`" as part of its path, it will look to the `.param()` handler that we just wrote 
to resolve a single task.