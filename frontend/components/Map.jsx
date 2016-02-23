var React = require('react');
var BenchStore = require('../stores/benchStore');
var ApiUtil = require('../util/apiUtil');

var Map = React.createClass({
	getInitialState: function(){
		this.markers = [];
		return {benches: BenchStore.all()};
	},
	componentDidMount: function(){
	  var mapDOMNode = this.refs.map;
	  var mapOptions = {
	    center: {lat: 37.7758, lng: -122.435},
	    zoom: 13
	  };
	  this.map = new google.maps.Map(mapDOMNode, mapOptions);


	  var context = this;
	  this.idleFetch = this.map.addListener("idle", function(){
	  	
        var bounds = {northEast: {lat: context.map.getBounds().getNorthEast().lat(),
        	                  lng: context.map.getBounds().getNorthEast().lng()},
        	      southWest: {lat: context.map.getBounds().getSouthWest().lat(),
        	      	          lng: context.map.getBounds().getSouthWest().lng()}};
	  	ApiUtil.fetchBenches(bounds);

	  });
      
	  this.benchToken = BenchStore.addListener(this._onChange);
    },
    _onChange: function(){
    	this.markers.forEach(function(marker){
    		marker.setMap(null);
    	});
    	var map = this.map;
    	var context = this;
    	
    	this.markers = [];
    	this.setState({benches: BenchStore.all()});
    	this.state.benches.forEach(function(bench){
          var benchLatLng = new google.maps.LatLng(bench.lat, bench.log);
          var benchMarker = new google.maps.Marker({
          	position: benchLatLng,
          	title: bench.description,
          	map: map
          });
          context.markers.push(benchMarker);

          
    	});
    	
    },
    componentWillUnmount: function(){
    	this.benchToken.remove();
    	this.map.event.removeListener(this.idleFetch);
    },

	render: function(){
	
		return (

			<div className="map" ref="map"></div>

		);
	}

});

module.exports = Map;