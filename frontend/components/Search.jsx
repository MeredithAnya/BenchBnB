var React = require('react');
var Index = require('./Index');
var Map = require('./Map');


var Search = React.createClass({
	render: function(){
		return (

			<div>
				<Map/>
				<Index/>
			</div>
		);
	}
  
});

module.exports = Search;