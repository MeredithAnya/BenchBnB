var BenchConstants = require('../constants/benchConstants');
var AppDispatcher = require('../dispatcher/dispatcher');

var ApiActions = {
	receiveAll: function(benches){
	    AppDispatcher.dispatch({
			actionType: BenchConstants.BENCHES_RECEIVED,
			benches: benches
	    });

	}
		
};

module.exports = ApiActions;