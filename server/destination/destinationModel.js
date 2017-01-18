var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

 //creating Destination Model
var destinationSchema = new mongoose.Schema({
	destinationName: {type: String, required: true},
	description: {type: String},
	mapPhoto: {type: String},
	mainPhoto: {type: String},
	photos: [String]
	
});

destinationSchema.plugin(autoIncrement.plugin,{model: 'Destination',startAt: 1});
var Destination = mongoose.model('Destination', destinationSchema);
module.exports = Destination;