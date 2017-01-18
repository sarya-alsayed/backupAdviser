var Destination = require('./destinationModel.js');

var repsonseHandler = require('../config/helpers.js').repsonseHandler;

module.exports = {
	createNewDestination: function (req, res, next) {
		var destinationName = req.body.destinationName;
		var description = req.body.description;
		var mainPhoto = req.body.mainPhoto;
		var mapPhoto = req.body.mapPhoto;
		var photos = req.body.photos;
		var newDestination = new Destination({
			destinationName: destinationName,
			description: description,
			mainPhoto: mainPhoto,
			mapPhoto: mapPhoto,
			photos: photos
		});
		newDestination.save(function (err, destination) {
			repsonseHandler(err, req, res, {status: 201, returnObj: destination}, next);
		});
	},

	destinationInfo: function (req, res, next) {
		var id = req.params.id;
		Destination.findOne({_id: id}, function (err,destination) {
			repsonseHandler(err, req, res, {status: 201, returnObj: destination}, next);
		});
	},

	deleteDestination: function(req, res, next) {
		var destinationId = req.params.id; 
		Destination.findOneAndRemove({_id: destinationId}, function (err, destination) {
			repsonseHandler(err, req, res, {status: 201, returnObj: destination}, next);
		});
	},

	getAllDestination: function (req, res, next) {
		Destination.find({})
		.exec(function (err, destinations) {
			repsonseHandler(err, req, res, {status: 201, returnObj: destinations}, next);
		});
	}
	// getDestinationsNames: function(req, res, next){

	// }		
};