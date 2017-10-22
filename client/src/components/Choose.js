require('normalize.css/normalize.css');
require('styles/bootstrap.css');
require('styles/custom.css');
require('styles/App.scss');
require('../../node_modules/react-dropdown/style.css');

import React from 'react';
import ClassSelector from './ClassSelector';


class Choose extends React.Component {

  render = () => {
    return (
      <div className="index content">

          <div className="row">
            <div className="col-md-12 top-banner creations-banner">
              <h1>Creations</h1>
              <p className="banner-subtitle-material">Select a group name to explore what's being made inside the ImagArena®.</p>
            </div>
				  </div>
        <ClassSelector />


			</div>
    );
  }
}


export default Choose;
