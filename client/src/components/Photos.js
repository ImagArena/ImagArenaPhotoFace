require('normalize.css/normalize.css');
require('styles/App.scss');

import path from 'path';
import React from 'react';
import {Modal} from 'react-bootstrap';
import Axios from 'axios';
import titlecase from 'titlecase';

class Photos extends React.Component {

	constructor() {
		super();
		this.pics = [];
		this.state = {
			showModal: false,
			photo: null
		 };
	}

	componentDidMount = () => {
		Axios.post('http://ec2-34-223-254-57.us-west-2.compute.amazonaws.com:3001/get_class_photos/', {groupName: this.props.params.groupName}).then(
			function success(response) {
				this.setState({
					weeks: response.data
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

	open = (url) => {
		this.setState({
			showModal: true,
			photo: url
		});
		console.log(url);
	}

  render = () => {

		let weeks = [];
		for (let i in this.state.weeks) {
			if (this.state.weeks[i].length) {
				weeks.push([<h2 className="level-number">Level {Number(i) + 1}</h2>]);
				for (let h in this.state.weeks[i]) {
					weeks[i].push(<img onClick={() => this.open(this.state.weeks[i][h])} src={this.state.weeks[i][h]} key={this.state.weeks[i][h]}></img>);
				}
			}
		}

		const loading = () => {
			return !this.state.weeks ? 'on' : null;
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
			    <img src={this.state.photo} />
				</Modal>
		  </div>
		);

    return (
      <div className="index">
				<h1 className="banner-title creations">Creations</h1>
				<div id="loading-indicator" className={loading()}>
					<img src='http://imagarenastatic.s3.amazonaws.com/loadinggif.gif' />
				</div>
				<h1 id="group-name" className="main-header">{title(this.props.params.groupName)}</h1>
				{modalInstance}
				{weeks}
      </div>
    );
  }
}


export default Photos;
