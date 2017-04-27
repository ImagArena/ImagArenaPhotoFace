require('normalize.css/normalize.css');
require('styles/App.scss');
require('../../node_modules/react-dropdown/style.css');

import React from 'react';
import ClassSelector from './ClassSelector';


class Choose extends React.Component {

  render = () => {
    return (
      <div className="index">
				<div className="creations-banner">
					<h1 className="banner-title"><strong>Creations</strong></h1>
					<p className="banner-subtitle-material">Select a group name to explore what's being made inside the ImagArena®.</p>
				</div>
        <ClassSelector />


			</div>
    );
  }
}


export default Choose;
