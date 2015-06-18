##  Rest

<pre><code data-trim>
  Task.find(function(err, tasks){
</pre></code>

This fires the `.find()` function on Mongoose's `Task` object. Any error encountered will be put in the `err` paramenter 
otherwise the result will be put into the `tasks` parameter of the callback function.