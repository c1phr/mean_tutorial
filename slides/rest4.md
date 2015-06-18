##  Get the details with params

So how does a `.param()` handler help us? Add this new route to `/routes/index.js`.

<pre><code data-trim>
router.get('/tasks/:task', function(req, res) {
  res.json(req.task);
});
</pre></code>

This is where magic happens. Look at how little work we had to do to get the details of a task! 
When the router was resolving this path, it caught `":task"` and used the appropriate `.param()` handler 
to get the task data. That happened earlier in the processing pipeline, so all we have to do is pull out 
the task object and put the JSON into the response.