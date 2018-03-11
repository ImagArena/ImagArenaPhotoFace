import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-74261860-1');

import Main from './components/Main';
import Home from './components/Home';
import FAQ from './components/FAQ';
import MultiWeek from './components/MultiWeek';
import Birthday from './components/Birthday';
import Workshop from './components/Workshop';


import Choose from './components/Choose';
import Photos from './components/Photos';

browserHistory.listen(function (location) {
		window.ga('send', 'pageview', location.pathname);
});

// Render the main component into the dom
ReactDOM.render((

<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>

	<Route path='/' component={Main}>
		<IndexRoute component={Home} />

    <Route path='faq' component={FAQ} />
		<Route path='multiweek' component={MultiWeek} />
		<Route path='birthday' component={Birthday} />
		<Route path='workshop' component={Workshop} />
		<Route path='creations' component={Choose} />
		<Route path='creations/:groupName' component={Photos}/>
	</Route>

</Router>
), document.getElementById('app'));
