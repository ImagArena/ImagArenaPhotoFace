import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Axios from 'axios';
import titlecase from 'titlecase';
import Dropdown from 'react-dropdown';

import Modal from './Modal';

const title = (name) => {
	if (name) {
		name = name.split("_");
		name = name.join(" ");
		return titlecase.toTitleCase(name);
	}
}

class GroupSelector extends Component {

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

	closeModal = () => {
		this.setState({showModal: false});
	}

	showModal = () => {
		this.setState({showModal: true});
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
		this.setState({group: option.value})
	}

	viewPhotosForGroup = () => {
		browserHistory.push('/creations/' + this.state.group);
	}

	viewRandomGroup = () => {
		Axios.get('http://localhost:3001/get_random_group').then(
			(response) => {
				this.setState({group: response.data.groupName});
				this.viewPhotosForGroup();
			},
			(err)      => {
				console.error(err);
			}
		)

	}

    render = () => {
			return (
				<div>
					<div id="selector-choice-container">
						<button id="find-group" className="imagarena-button" onClick={this.showModal}>Find Group</button>
						<button id="random-group" className="imagarena-button" onClick={this.viewRandomGroup}>Random Group</button>
					</div>

					<Modal show={this.state.showModal}>
						<div className='group-selector'>
							<a role="button" className="close" onClick={this.closeModal}>×</a>
							<h2>Find Your Group</h2>
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
												value={this.state.group}
												placeholder="Select Group"
												className={this.state.season ? "" : "hidden"}
							/>
						<button
							id="photo-group-submit"
							onClick={this.viewPhotosForGroup}
							className={"imagarena-button" + (this.state.group ? "" : " hidden")}
						>
							Go
						</button>
						</div>
					</Modal>
				</div>

			)
    }
}

export default GroupSelector;
