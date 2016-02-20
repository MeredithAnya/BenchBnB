var ApiActions = require('../actions/apiActions');

var ApiUtil = {
  fetchBenches: function(){
  	$.ajax({
      url: 'api/benches',
      type: 'GET',
      dataType: "json",
      success:(function(benches){
      	ApiActions.receiveAll(benches);
      })
  	});
  }
};

module.exports = ApiUtil;