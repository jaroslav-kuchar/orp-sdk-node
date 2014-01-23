/**
 * @author Jaroslav Kuchar
 * ORP controller
 */

var recommender = require("./SimpleRecommender");

exports.controller = function(req, res) {

	// no body -> error
	if (!req.body) {
		res.send(400, 'No data in POST request!');
		return;
	}
	// no required parameters -> error
	if (!req.body.body || !req.body.type) {
		res.send(400, 'Body or Type is empty!');
		return;
	}
	// parse
	var type = req.body.type;
	var body = JSON.parse(req.body.body);

	// handle
	switch (type) {
		case 'recommendation_request':
			recommender.recommend(body,function(err, output) {
				res.json(output);
			});
			break;
		case 'item_update':
			recommender.processItem(body, function(err) {
				res.send(200);
			});
			break;
		case 'event_notification':
			recommender.processInteraction(body, function(err) {
				res.send(200);
			});
			break;
		case 'error_notification':
			console.log(new Date() + "---" + JSON.stringify(body));
			res.send(200);
			break;
		default:
			// Unknown type
			res.send(400, 'Type ' + type + ' is unknown!');
			console.log('Type ' + type + ' is unknown!');
			break;
	}
};