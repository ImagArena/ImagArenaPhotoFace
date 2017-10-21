require('normalize.css/normalize.css');

require('styles/bootstrap.css');
require('styles/custom.css');

import React from 'react';
import { Link } from 'react-router';
import Logo from '../images/logo.png';


class Main extends React.Component {

	constructor() {
		super();
	}

	chooseGroupName = (option) => {
		this.setState({groupName: option.value});
	}

  render = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-faded fixed-top">
          <div className="container">

            <Link className="navbar-brand" to="/">
              <img src={Logo} />
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#programs">Programs</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/faq">FAQ</Link>
                </li>
                <li className="nav-item">
                  <Link id="creations-link" to="/creations">Creations</Link>
                </li>
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
