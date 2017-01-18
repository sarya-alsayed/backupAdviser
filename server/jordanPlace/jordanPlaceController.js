var JordanPlace = require('./jordanPlaceModel.js');

var repsonseHandler = require('../config/helpers.js').repsonseHandler;

module.exports = {
	createNewJordanPlace: function (req, res, next) {
		var placeName = req.body.placeName;
		var description = req.body.description;
		var mainPhoto = req.body.mainPhoto;
		var photos = req.body.photos;
		var newJordanPlace = new JordanPlace({
			placeName: placeName,
			description: description,
			mainPhoto: mainPhoto,
			photos: photos
		});
		newJordanPlace.save(function (err, place) {
			repsonseHandler(err, req, res, {status: 201, returnObj: place}, next);
		});
	},

	placeInfo: function (req, res, next) {
		var id = req.params.id;
		JordanPlace.findOne({_id: id}, function (err,place) {
			repsonseHandler(err, req, res, {status: 201, returnObj: place}, next);
		});
	},

	deletePlace: function(req, res, next) {
		var placeId = req.params.id; 
		JordanPlace.findOneAndRemove({_id: placeId}, function (err, place) {
			repsonseHandler(err, req, res, {status: 201, returnObj: place}, next);
		});
	},

	getAllPlaces: function (req, res, next) {
		JordanPlace.find({})
		.exec(function (err, places) {
			repsonseHandler(err, req, res, {status: 201, returnObj: places}, next);
		});
	}		
};