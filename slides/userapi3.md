###  "Authenticity is invaluable, originality is non-existent" 
 
Get one user param
****
<pre><code data-trim>
router.param('user', function(req, res, next, id) {
  var query = User.findById(id);
  query.exec(function (err, user) {
    if (err) { return next(err); }
    if (!user) { return next(new Error('user not found')); }
    req.user = user;
    return next();
  });
});
</pre></code>

Get one user route
****
<pre><code data-trim>
router.get('/users/:user', function(req, res) {
  res.json(req.user);
});
</pre></code>