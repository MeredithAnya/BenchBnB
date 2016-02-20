var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _benches = [];

var BenchStore = new Store(AppDispatcher);

BenchStore.all = function (){
	return _benches.slice(0);
};

var resetBenches = function(benches){
   _benches = benches;
};

BenchStore.__onDispatch = function(payload){
  switch(payload.actionType){
  	case "BENCHES_RECEIVED":
  	resetBenches(payload.benches);
  	BenchStore.__emitChange();
  	break;
  }
};



module.exports = BenchStore;