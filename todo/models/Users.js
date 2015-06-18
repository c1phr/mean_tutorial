var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
	email: String
});

mongoose.model('User', UserSchema);