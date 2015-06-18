##  REST

Before we continue, let's talk about what some of the different pieces of this handler are.

<pre><code data-trim>
router.get('/tasks', function(req, res, next) {
</pre></code>

This instructs the router to pass GET requests from /tasks to the callback function.
The callback function takes three parameters:

* req: Represents the data passed in the request
* res: Represnts the response object that will be sent back to the client
* next: Reference to the next part of the stack that will handle the request next in the pipeline.
  * next() says "Continue processing, I don't want to actually do any work on this request"
  * next(err) is used to pass an error to the next part of the processing chain