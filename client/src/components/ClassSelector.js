import React, { Component } from 'react';
import { browserHistory } from 'react-router';
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

class ClassSelector extends Component {

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
		browserHistory.push('/creations/' + option.value);
	}

    render = () => {
			const defaultOption = this.state.groups[0];
			return (
				<Dropdown options={this.state.groups} onChange={this.chooseGroupName} value={title(this.state.groupName)} placeholder="Choose Group" />
			)
    }
}

export default ClassSelector;
