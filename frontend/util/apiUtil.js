var ApiActions = require('../actions/apiActions');

var ApiUtil = {
  fetchBenches: function(bounds){

  	$.ajax({
      url: 'api/benches',
      type: 'GET',
      dataType: 'json',
      data: {bounds: bounds},
      success:(function(benches){
      	ApiActions.receiveAll(benches);
      })
  	});
  }
};

module.exports = ApiUtil;