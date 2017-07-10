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
				<div className="container-fluid">
					<div className="col-md-8 col-md-offset-2">
						<div id="home-video" className="videoWrapper">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/ZCdvLGblLsc" frameborder="0" allowfullscreen></iframe>
						</div>

					</div>
				</div>

	      <div >
					<h2 className="main-header" id="hometext">ImagArena® is a <strong>building workshop</strong> for <strong>ages 6+</strong> designed to awaken the imaginative abilities of <strong>every individual</strong>.</h2>
				</div>




			</div>
    );
  }
}




export default Home;
