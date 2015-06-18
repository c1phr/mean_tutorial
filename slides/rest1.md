## Rest

Since we're going to be building the front-end of this application in Angular, all the server interaction is going to 
happen over RESTful requests. We're going to add the code for all of these inside `/routes/index.js`.

First let's add Mongoose and our models at the top of the file:

<pre><code data-trim>
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Task = mongoose.model('Task');
</pre></code>

Then we'll add our first GET request:

<pre><code data-trim>
router.get('/tasks', function(req, res, next) {
  Task.find(function(err, tasks){
    if (err) { return next(err); }
	res.json(tasks);
  });
});
</pre></code>

Scroll down to see a breakdown of this request handler. 