##  REST

<pre><code data-trim>
    if (err) { return next(err); }
</pre></code>

If an error was returned, hand it off to the next stage of processing so it can be bubbled back to the client, 
and don't bother trying to return any data. 

<pre><code data-trim>
	res.json(tasks);
</pre></code>

Otherwise, take the data returned from the database, put it in JSON format and add it to the response.