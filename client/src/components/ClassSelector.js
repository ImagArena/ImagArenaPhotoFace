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
		Axios.get('http://localhost:3001/get_groupnames/').then(
			function success(response) {
				this.setState({
					groups: response.data.groups.map((group) => { return {label: group.groupName, value: group.groupName} })
				});
			}.bind(this),
			function error(response) {
				console.log(response);
			}
		);
	}

	chooseGroupName = (option) => {
		if (this.props.reload) {
			window.location.href = '/creations/' + option.value;
		}
		else {
			browserHistory.push('/creations/' + option.value);
		}
	}

    render = () => {
			return (
				<div className='Dropdown-container'>
					<Dropdown options={this.state.groups} onChange={this.chooseGroupName} value={this.props.default} placeholder="Select Group" />
				</div>

			)
    }
}

export default ClassSelector;
