require('normalize.css/normalize.css');
require('styles/App.scss');
require('styles/bootstrap.css');
require('../../node_modules/react-dropdown/style.css');

import React from 'react';
import { Link }from 'react-router';

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


class Photos extends React.Component {

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
		this.setState({groupName: option.value});
	}

  render = () => {
		const defaultOption = this.state.groups[0];
    return (
      <div className="index">
				<h1 id="group-name" className="main-header">Imagarena Photos</h1>
				<div className="container">
					<h2>Choose Group Name</h2>
					<Dropdown options={this.state.groups} onChange={this.chooseGroupName} value={title(this.state.groupName)} placeholder="Choose Group" />
					{this.state.groupName ? <Link className="link-button" to={"/photos/" + this.state.groupName}>Go</Link> : null }

				</div>
			</div>
    );
  }
}


export default Photos;
