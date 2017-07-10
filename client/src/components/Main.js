require('normalize.css/normalize.css');
require('styles/App.scss');
require('styles/tim.scss');

import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';


class Main extends React.Component {

	constructor() {
		super();
	}

	chooseGroupName = (option) => {
		this.setState({groupName: option.value});
	}

  render = () => {
    return (
      <div className="main">
			<nav id="imagarena-nav" className="navbar navbar-default navbar-fixed-top">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#collapse" aria-expanded="false">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<Link to="/" className="navbar-brand">
						<img src='../images/logo_lockup.svg' />
					</Link>
				</div>
				<div id="collapse" className="collapse navbar-collapse">
					<ul className="nav navbar-nav navbar-right">
						<NavLink to="/programs">Programs</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink to="/contact">Contact</NavLink>

						<li className="pill-boy"><Link to="/creations" id="creations">Creations</Link></li>
						<li className="pill-boy"><Link to="/materials" id="materials">Materials</Link></li>
					</ul>
				</div>
			</div>
			</nav>
				{this.props.children}
			</div>
    );
  }
}


export default Main;
