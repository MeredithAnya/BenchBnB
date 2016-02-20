var React = require('react');
var ReactDOM = require('react-dom');


var BenchStore = require('./stores/benchStore');
var ApiUtil = require('./util/apiUtil');


document.addEventListener('DOMContentLoaded', function(){
	ReactDOM.render(<Index/>,
	document.getElementById('root')
	);
});