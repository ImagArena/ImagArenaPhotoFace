require('normalize.css/normalize.css');
require('styles/App.scss');

import path from 'path';
import React from 'react';
import {Modal} from 'react-bootstrap';
import Axios from 'axios';
import titlecase from 'titlecase';

import ClassSelector from './ClassSelector';

class Photos extends React.Component {

	constructor() {
		super();
		this.pics = [];
		this.state = {
			showModal: false,
			currentLevel: 0,
			currentPhoto: 0,
			levels: [[]],
			loaded: false
		 };
	}

	componentDidMount = () => {
		Axios.post('http://ec2-54-202-229-195.us-west-2.compute.amazonaws.com/get_class_photos/', {groupName: this.props.params.groupName}).then(
			function success(response) {
				let levels = response.data;
				for (var i = 0; i < levels.length; i++) {
			    if (!levels[i].length) {
			      levels.splice(i, 1);
			      i--;
			    }
			  }
				this.setState({
					levels: levels,
					loaded: true
				});
			}.bind(this),
			function error(response) {
				console.log(response);
			}
		);
	}


	close = () => {
		this.setState({ showModal: false });
	}

	open = (i, h) => {
		this.setState({
			showModal: true,
			currentLevel: Number(i),
			currentPhoto: Number(h)
		});
	}

	next = () => {
		if (this.state.currentPhoto < this.state.levels[this.state.currentLevel].length - 1) {
			this.setState({
				currentPhoto: this.state.currentPhoto + 1
			});
		}
		else if (this.state.currentLevel < this.state.levels.length - 1) {
				this.setState({
					currentLevel: this.state.currentLevel + 1,
					currentPhoto: 0
				});
		}
		else {
			this.close();
		}
	}


	prev = () => {
		if (this.state.currentPhoto > 0) {
			this.setState({
				currentPhoto: this.state.currentPhoto - 1
			});
		}
		else if (this.state.currentLevel > 0) {
				this.setState({
					currentLevel: this.state.currentLevel - 1,
					currentPhoto: this.state.levels[this.state.currentLevel - 1].length - 1
				});
		}
		else {
			this.close();
		}
	}

  render = () => {

		let levels = [];
		for (let i in this.state.levels) {
			levels.push([<h2 className="level-number">Level {Number(i) + 1}</h2>]);
			for (let h in this.state.levels[i]) {
				levels[i].push(<img onClick={() => this.open(i, h)} src={this.state.levels[i][h]} key={this.state.levels[i][h]}></img>);
			}
		}

		const loading = () => {
			return !this.state.loaded ? 'on' : null;
		}

		const title = (name) => {
			name = name.split("_");
			name = name.join(" ");
			return titlecase.toTitleCase(name)
		}


		const modalInstance = (
		  <div className="static-modal">
				<Modal show={this.state.showModal} onHide={this.close}>
					<a role="button" className="close" onClick={this.close}>×</a>
					<span role="button" className="glyphicon glyphicon-chevron-left" onClick={this.prev}></span>
			    <img src={this.state.levels[this.state.currentLevel][this.state.currentPhoto]} />
					<span role="button" className="glyphicon glyphicon-chevron-right" onClick={this.next}></span>
					{/*<a href={this.state.levels[this.state.currentLevel][this.state.currentPhoto]} role="button" className="glyphicon glyphicon-save" onClick={this.download} download></a>*/}
				</Modal>
		  </div>
		);

		const defaultOption = {
			label: title(this.props.params.groupName),
			value: this.props.params.groupName
		}

    return (

      <div className="index mosaic">
				<div className="creations-banner">
					<h1 className="banner-title"><strong>Creations</strong></h1>
					<p className="banner-subtitle-material">Select a group name to explore what's being made inside the ImagArena®.</p>
				</div>

				<div className="mosaic-container">
					<div id="loading-indicator" className={loading()}>
						<div className="loading-container">
							<img src='http://imagarenastatic.s3.amazonaws.com/loadinggif.gif' />
						</div>

					</div>

					<ClassSelector default={defaultOption} reload={true} />

					<h3 id="group-name" className="main-header">{title(this.props.params.groupName)}</h3>

					{modalInstance}
					{levels}
				</div>


      </div>
    );
  }
}


export default Photos;
