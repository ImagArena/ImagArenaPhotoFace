require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


class Home extends React.Component {

	constructor() {
		super();
	}

  render = () => {
    return (
      <div className="index">
				<h1 id="group-name" className="main-header">Home</h1>
			</div>
    );
  }
}


export default Home;
