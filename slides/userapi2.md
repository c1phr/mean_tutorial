###  "Authenticity is invaluable, originality is non-existent" 
 
Get all users
****
<pre><code data-trim>
router.get('/users', function(req, res, next) {
  User.find(function(err, users){
    if (err) { return next(err); }
	res.json(users);
  });
});
</pre></code>

Create new user
****
<pre><code data-trim>
router.post('/users', function(req, res, next) {
	var user = new User(req.body);
	user.save(function(err, user) {
		if (err){ return next(err); }
		res.json(user);
	});
});
</pre></code>