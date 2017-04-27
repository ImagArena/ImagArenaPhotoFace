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
				<div id="homegif" className="col-md-8 col-md-offset-2">
						<img src={require('../images/homepage.gif')} className="img-responsive" alt="Responsive image" />
				</div>
	      <div >
					<h2 className="main-header" id="hometext">TEST CHANGEImagArena® is a <strong>building workshop</strong> for <strong>ages 6+</strong>, designed to awaken the imaginative abilities of <strong>every individual</strong>.</h2>
				</div>
			</div>
    );
  }
}




export default Home;
