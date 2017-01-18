var mongoose = require('mongoose');

 //creating jordan Model
var jordanSchema = new mongoose.Schema({
	description: {type: String},
	mapPhoto: {type: String},
	mainPhoto: {type: String}	
});

var Jordan = mongoose.model('Jordan', jordanSchema);
module.exports = Jordan;