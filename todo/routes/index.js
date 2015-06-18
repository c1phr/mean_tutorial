var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Task = mongoose.model('Task');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tasks', function(req, res, next) {
  Task.find(function (err, tasks) {
    if (err) { return next(err); }
    res.json(tasks);
  });
});

router.post('/tasks', function(req, res, next) {
  var task = new Task(req.body);
  task.save(function(err, task) { 
    if (err) { return next(err); }
    res.json(task);
  });
});

router.param('task', function(req, res, next, id) {
  var query = Task.findById(id);
  query.exec(function(err, task) {
    if (err) { return next(err); }
    if (!task) { return next(new Error('Task not found')); }
    req.task = task;
    next();
  });
});

router.get('/tasks/:task', function(req, res) {
  res.json(req.task);
});

router.get('/users', function(req, res, next) {
  User.find(function (err, users) {
    if (err) { return next(err); }
    res.json(users);
  });
});

router.post('/users', function(req, res, next) {
  var user = new User(req.body);
  user.save(function(err, user) { 
    if (err) { return next(err); }
    res.json(user);
  });
});

router.param('user', function(req, res, next, id) {
  var query = User.findById(id);
  query.exec(function(err, user) {
    if (err) { return next(err); }
    if (!user) { return next(new Error('user not found')); }
    req.user = user;
    next();
  });
});

router.get('/users/:user', function(req, res) {
  res.json(req.user);
});



module.exports = router;
