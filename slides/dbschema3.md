##  DB Schema

Create a file inside the `models` directory called: `Tasks.js` and populate it with the following code:

<pre><code data-trim>
// Reference the Mongoose package
var mongoose = require('mongoose');
// Setup the schema
var TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
	// Reference a user by their Mongo ObjectId
	creator: { type: mogoose.Schema.Types.ObjectId, ref: 'User' }
});
// Attach the schema to Mongoose for reference later
mongoose.model('Task', TaskSchema);
</pre></code>

The above code creates a data model for our task object. The `creator` field shows how to reference another object (similar to a relationship in a SQL database).
