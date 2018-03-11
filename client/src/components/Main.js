require('normalize.css/normalize.css');

require('styles/bootstrap.css');
require('styles/custom.css');

import React from 'react';
import { Link } from 'react-router';
import Logo from '../images/black_logo_text.png';


class Main extends React.Component {

	constructor() {
		super();
    this.state = {
      alertClosed: false
    }
	}
  
  closeAlert = () => {
    this.setState({alertClosed: true});
  }

	chooseGroupName = (option) => {
		this.setState({groupName: option.value});
	}
  render = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-faded fixed-top">
          <div id="alert" className={this.state.alertClosed ? "hidden" : null}>
            <span id="alert-close" onClick={this.closeAlert}>&#215;</span>
            <div className="alert-content">
              Russian Hackers have invaded Imagarena! Click <Link to="/faq">Here</Link> for more information
            </div>
          </div>
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
                  <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="programs-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Programs
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <Link className="dropdown-item" to="/multiweek">Multiweek</Link>
                      <Link className="dropdown-item" to="/workshop">Workshop</Link>
                      <Link className="dropdown-item" to="/birthday">Birthday</Link>
                    </div>
                  </div>
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
