require('normalize.css/normalize.css');
require('styles/App.scss');
require('../../node_modules/react-dropdown/style.css');

import React from 'react';
import { Link, browserHistory } from 'react-router';

import Axios from 'axios';
import titlecase from 'titlecase';
import Dropdown from 'react-dropdown';

const title = (name) => {
	if (name) {
		name = name.split("_");
		name = name.join(" ");
		return titlecase.toTitleCase(name);
	}
}


class Choose extends React.Component {

	constructor() {
		super();
		this.state = {
			groups: [],
			groupName: null
		}
	}

	componentDidMount = () => {
		Axios.get('http://ec2-34-223-254-57.us-west-2.compute.amazonaws.com:3001/get_groupnames/').then(
			function success(response) {
				this.setState({
					groups: response.data.map(function(x) {return {label: title(x), value: x}})
				});
			}.bind(this),
			function error(response) {
				console.log(response);
			}
		);
	}

	chooseGroupName = (option) => {
		// this.setState({groupName: option.value});
		browserHistory.push('/creations/' + option.value);

	}

  render = () => {
		const defaultOption = this.state.groups[0];
    return (
      <div className="index">
				<h1 className="banner-title creations">Creations</h1>
						<h2 className="choose-header">Choose Group Name</h2>
						<Dropdown options={this.state.groups} onChange={this.chooseGroupName} value={title(this.state.groupName)} placeholder="Choose Group" />
			</div>
    );
  }
}


export default Choose;
