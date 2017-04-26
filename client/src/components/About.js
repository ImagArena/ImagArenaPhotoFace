require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


class About extends React.Component {

	constructor() {
		super();
	}

  render = () => {
    return (
      <div className="index">
				<h1 id="group-name" className="main-header">About</h1>
			</div>
    );
  }
}


export default About;
