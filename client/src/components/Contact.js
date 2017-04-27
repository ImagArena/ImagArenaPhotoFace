require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


class Contact extends React.Component {

	constructor() {
		super();
	}

  render = () => {
    return (
      <div className="index">
				<div className="container-fluid">
		      <div className="row">
		        <div className="col-md-6 col-md-offset-3">
		            <h3 className="text-center">For <strong>more information</strong> or for <strong> scheduling requests</strong> , send us an email by clicking the button below. <br /><br />We’re always open to new ideas and opportunities.</h3>
		            <br />
		            <center><a href="mailto:contact@imagarena.org"><input className="btn btn-xlarge" type="button" value="CONTACT" /></a></center>
		            <p className="text-center"><small>contact@imagarena.org</small></p>
		        </div>
		        <div id="sharegif" className="col-md-6 col-md-offset-3">
		            <img src={require('../images/share.gif')} className="img-responsive" alt="Responsive image" />
		        </div>
		      </div>
		    </div>
			</div>
    );
  }
}


export default Contact;
