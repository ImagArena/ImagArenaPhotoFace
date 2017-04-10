import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Photos from './components/Photos';

// Render the main component into the dom
ReactDOM.render((
<Router history={browserHistory}>

	<Route path='/'>
		<Route path='photos/:groupName' component={Photos}/>
	</Route>

</Router>
), document.getElementById('app'));
