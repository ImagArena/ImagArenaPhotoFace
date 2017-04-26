require('normalize.css/normalize.css');
require('styles/App.scss');
require('../../node_modules/react-dropdown/style.css');

import React from 'react';
import ClassSelector from './ClassSelector';


class Choose extends React.Component {

  render = () => {
    return (
      <div className="index">
				<h1 className="banner-title creations">Creations</h1>
						<h2 className="choose-header">Choose Group Name</h2>
						<ClassSelector />
			</div>
    );
  }
}


export default Choose;
