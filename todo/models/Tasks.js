var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
	title: String,
	description: String,
	dueDate: Date,
	hoursSpent: { type: Number, min: 0, max: 40 },
	creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Task', TaskSchema);