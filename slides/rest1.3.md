##  Rest

<pre><code data-trim>
  Task.find({}).populate('creator').exec(function(err, tasks) {
</pre></code>

This fires the `.find()` function on Mongoose's `Task` object, and then pipes the response to `.populate()` which will bring in all the 
user data for creators. Finally, it calls `.exec()` to do something with the results.