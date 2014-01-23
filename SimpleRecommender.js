/**
 * @author Jaroslav Kuchar
 * Simple Recommender
 */

var SimpleRecommender = function () {

	var memory = {};

	var _recommend = function(body, callback){
		var output = {
			"recs":{
				"ints": []
			}
		};
		if(memory[body.context.simple["27"]].length > body.limit){
			output.recs.ints = memory[body.context.simple["27"]].slice(0,body.limit);
		} else {
			output.recs.ints = memory[body.context.simple["27"]];
		}
		callback(null,output);
	};

	var _processItem = function(body, callback){
		if(!memory[body.domainid]) {
			memory[body.domainid] = [];
		}
		memory[body.domainid].push(body.id);
		if(memory[body.domainid].length > 10) {
			memory[body.domainid].shift();
		}
		callback(null);
	};


	var _processInteraction = function(body, callback){
		callback(null);
	};

	return {
        recommend: _recommend,
        processItem: _processItem,
        processInteraction: _processInteraction
    };

}();
module.exports = SimpleRecommender;