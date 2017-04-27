require('normalize.css/normalize.css');
require('styles/App.scss');
require('../../node_modules/react-dropdown/style.css');

import React from 'react';
import ClassSelector from './ClassSelector';


class Choose extends React.Component {

  render = () => {
    return (
      <div className="index">
				<h1 className="banner-title creations"><strong>Creations</strong></h1>
        <p className="banner-subtitle-material">ImagArena® activities feature open-ended building systems that encourage exploration and imaginative play. </p>
            <ClassSelector />
        

			</div>
    );
  }
}


export default Choose;
