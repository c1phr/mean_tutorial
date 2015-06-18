##  DB Schema

Now that we have some data models created, let's wire them up to our application. Open up `app.js` and
add the following code right after importing `mongoose` (before creating the database connection).
<pre><code data-trim>
var mongoose = require('mongoose');
// New Code
require("./models/Users");
require("./models/Tasks");
// End New Code
mongoose.connect('mongodb://localhost/todo');
</pre></code>

Great, now we have data models created and wired up. There's no need to perform any sort of migration or update the schema in the database. 
By nature of NoSQL, the structure exists only in the data stored, not in the storage medium itself. Now let's create a way to interact with some data.