var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
	title: String,
	description: String,
	creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Task', TaskSchema);