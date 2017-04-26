require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


class Materials extends React.Component {

	constructor() {
		super();
	}

  render = () => {
    return (
      <div className="index">
				<h1 id="group-name" className="main-header">Materials</h1>
			</div>
    );
  }
}


export default Materials;
