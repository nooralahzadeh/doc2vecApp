var React=require('react');
var ReactDOM=require('react-dom');
var {Route,Router,IndexRoute,hashHistory}=require('react-router');
var Main=require('Main');
var Word2Vec=require('Word2Vec');
var About=require('About');
var Examples=require('Examples');

// load foundation'
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Word2Vec}/>
    </Route>
  </Router>,

    document.getElementById('app')
  );