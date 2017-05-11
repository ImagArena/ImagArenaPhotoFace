import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-74261860-1');

import Main from './components/Main';
import Home from './components/Home';
import Programs from './components/Programs';
import About from './components/About';
import Contact from './components/Contact';
import Materials from './components/Materials';


import Choose from './components/Choose';
import Photos from './components/Photos';

browserHistory.listen(function (location) {
		window.ga('send', 'pageview', location.pathname);
});

// Render the main component into the dom
ReactDOM.render((

<Router history={browserHistory}>

	<Route path='/' component={Main}>
		<IndexRoute component={Home} />
		<Route path='programs' component={Programs}></Route>
		<Route path='about' component={About}></Route>
		<Route path='contact' component={Contact}></Route>
		<Route path='materials' component={Materials}></Route>

		<Route path='creations' component={Choose} />
		<Route path='creations/:groupName' component={Photos}/>
	</Route>

</Router>
), document.getElementById('app'));
