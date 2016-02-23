var React = require('react');
var ReactDOM = require('react-dom');


var BenchStore = require('./stores/benchStore');
var ApiUtil = require('./util/apiUtil');
var Index = require('./components/Index');
var Map = require('./components/Map');
var Search = require('./components/Search');


document.addEventListener('DOMContentLoaded', function(){
	window.store = BenchStore;
	ReactDOM.render(<Search/>,
	document.getElementById('content')
	);
});