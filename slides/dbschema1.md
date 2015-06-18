##  DB Schema

Let's create a database schema for our Todo application. First we need to import Mongoose for the application. 
Add the following lines to your app.js file right before `var routes = ...`:

<pre><code data-trim>
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo');
</code></pre>

The first line will Mongoose package (similar to `using` in .NET), and the second line instructs Mongoose to connect to 
the "todo" database in our local MongoDB instance.