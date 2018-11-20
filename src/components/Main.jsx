require('normalize.css/normalize.css');

require('styles/fontawesome-all.css');
require('styles/bootstrap.css');
require('styles/custom.css');

import React from 'react';
import { Link } from 'react-router';
import Logo from '../images/black_logo_text.png';


class Main extends React.Component {

  constructor() {
    super();
  }

  closeAlert = () => {
    $("#app").removeClass('alerted');
  }

  chooseGroupName = (option) => {
    this.setState({ groupName: option.value });

  }
  render = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-faded fixed-top">
          {/*<div id="alert">
            <div className="alert-content">
              <span></span>
              <span>Attention directors! Now booking <Link to="/workshop">summer camp</Link> events.</span>
              <span id="alert-close" onClick={this.closeAlert}>&#215;</span>

            </div>
    </div>*/}
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
                      <strong>Programs</strong>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <Link className="dropdown-item" to="kids"><strong>Kids</strong></Link>
                      <Link className="dropdown-item" to="families"><strong>Families</strong></Link>
                      <Link className="dropdown-item" to="adults"><strong>Adults</strong></Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/faq"><strong>FAQ</strong></Link>
                </li>
                <li className="nav-item">
                  <Link id="creations-link" to="/creations"><strong>Call To Action</strong></Link>
                </li>
                {/*<li className="nav-item">
                  <a id="shop-link" href="https://shop.imagarena.com" target="_blank"><i className="fas fa-shopping-cart"></i> Shop</a>
    </li>*/}
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
