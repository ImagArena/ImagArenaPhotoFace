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
			regions: ["Boston"],
			seasons: ["Winter 2018", "Spring 2018"],
			groups: [],
		}
	}

	componentDidMount = () => {

	}

	getGroupNames = (region, seasonInfo) => {
		let query = {
			region: region,
			season: seasonInfo.season,
			year: Number(seasonInfo.year)
		}

		Axios.post('http://localhost:3001/get_groupnames/', query).then(
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

	chooseRegion = (option) => {
		this.setState({region: option.value});
	}

	chooseSeason = (option) => {
		let splitSeason = option.value.split(" ");
		let seasonInfo = {
			season: splitSeason[0],
			year:   splitSeason[1]
		}
		this.getGroupNames(this.state.region, seasonInfo);
		this.setState({season: option.value});
	}

	chooseGroupName = (option) => {
		browserHistory.push('/creations/' + option.value);
	}

    render = () => {
			return (
				<div className='Dropdown-container'>
					<Dropdown options={this.state.regions}
						        onChange={this.chooseRegion}
										value={this.state.region}
										placeholder="Select Region"
					/>
					<Dropdown options={this.state.seasons}
						        onChange={this.chooseSeason}
										value={this.state.season}
										placeholder="Select Season"
										className={this.state.region ? "" : "hidden"}
					/>
					<Dropdown options={this.state.groups}
						        onChange={this.chooseGroupName}
										value={this.props.default}
										placeholder="Select Group"
										className={this.state.season ? "" : "hidden"}
					/>
				</div>

			)
    }
}

export default ClassSelector;
