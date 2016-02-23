var React = require('react');
var BenchStore = require('../stores/benchStore');
var ApiUtil = require('../util/apiUtil');
var Map = require('./Map');

var Index = React.createClass({
   getInitialState: function(){
     return {benches: BenchStore.all()}
   },
   updateBench: function(){
    this.setState({benches: BenchStore.all()});
   },
   componentDidMount: function(){
   
    this.benchToken = BenchStore.addListener(this.updateBench);
   },
   componentWillUnmount: function(){
     this.benchToken.remove();
   },
   render: function(){
  

    var benchlist = this.state.benches.map(function(bench, index){
     return <li key={index}>{bench.description}</li>
    })

    return (

        <div>
        <ul>{benchlist}</ul>
        </div>
      );

   }

});



module.exports = Index;