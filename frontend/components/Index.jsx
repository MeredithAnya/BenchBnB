var react = require('react');
var BenchStore = require('../stores/benchStore');
var ApiUtil = require('../util/apiUtil');

var Index = React.createClass({
   getInitialState: function(){
     return {benches: BenchStore.all()}
   },
   updateBench: = function(){
    var benches = BenchStore.all();
    this.setState({benches: benches});
   },
   componentDidMount: function(){
   	ApiUtil.fetchBenches();
    this.benchToken = BenchStore.addListener(this.updateBench);
   },
   componentWillUnmount: = function(){
     this.benchToken.remove();
   },

});