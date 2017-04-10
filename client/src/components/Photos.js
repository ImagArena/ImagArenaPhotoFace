require('normalize.css/normalize.css');
require('styles/App.scss');
require('styles/bootstrap.css');

import React from 'react';
import {Modal} from 'react-bootstrap';
import Axios from 'axios';

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
		Axios.post('http://localhost:3001/get_class_photos/', {groupName: this.props.params.groupName}).then(
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
				weeks.push([<h2>Week {Number(i) + 1}</h2>]);
				for (let h in this.state.weeks[i]) {
					weeks[i].push(<img onClick={() => this.open(this.state.weeks[i][h])} src={this.state.weeks[i][h]} key={this.state.weeks[i][h]}></img>);
				}
			}
		}

		const loading = () => {
			return !this.state.weeks ? 'on' : null;
		}


		const modalInstance = (
		  <div className="static-modal">
				<Modal show={this.state.showModal} onHide={this.close}>
					<a href="#" className="close" onClick={this.close}>×</a>
			    <img src={this.state.photo} />
				</Modal>
		  </div>
		);

    return (
      <div className="index">
				<h1 id="loading-indicator" className={loading()}>Loading...</h1>
				<h1 id="group-name"></h1>
				{modalInstance}
				{weeks}
      </div>
    );
  }
}


export default Photos;
