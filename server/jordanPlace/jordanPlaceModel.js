var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

 //creating JordanPlace Model
var jordanPlaceSchema = new mongoose.Schema({
	placeName: {type: String, required: true},
	description: {type: String},
	mainPhoto: {type: String},
	photos: [String]
	
});

jordanPlaceSchema.plugin(autoIncrement.plugin,{model: 'JordanPlace',startAt: 1});
var JordanPlace = mongoose.model('JordanPlace', jordanPlaceSchema);
module.exports = JordanPlace;