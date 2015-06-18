##  DB Schema

Create a file inside the `models` directory called: `Users.js` and populate it with the following code:

<pre><code data-trim>
// Reference the Mongoose package
var mongoose = require('mongoose');
// Setup the schema
var UserSchema = new mongoose.Schema({
    name: String,
    email: String
});
// Attach the schema to Mongoose for reference later
mongoose.model('User', UserSchema);
</pre></code>

This is just a basic container to hold some user information that we're going to use later.