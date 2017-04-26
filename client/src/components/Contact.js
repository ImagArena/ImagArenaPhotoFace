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
				<h1 id="group-name" className="main-header">Contact</h1>
			</div>
    );
  }
}


export default Contact;
