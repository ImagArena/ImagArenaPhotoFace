require('normalize.css/normalize.css');
require('styles/bootstrap.css');
require('styles/custom.css');
require('styles/App.scss');

import path from 'path';
import React from 'react';
import Axios from 'axios';
import titlecase from 'titlecase';

import Modal from './Modal.jsx';
import GroupSelector from './GroupSelector';

class Photos extends React.Component {

	constructor() {
		super();
		this.pics = [];
		this.state = {
			showModal: false,
			currentPhoto: 0,
			photos: [],
			loaded: false
		 };
	}

	componentDidMount = () => {
		Axios.post('http://localhost:3001/get_class_photos/', {groupName: this.props.params.groupName}).then(
			function success (response) {
				this.setState({
					photos: response.data.photos,
					loaded: true
				});
			}.bind(this),
			(err) => {
				console.log(err);
			}
		);
	}


	close = () => {
		this.setState({ showModal: false });
	}

	open = (i) => {
		this.setState({
			showModal: true,
			currentPhoto: Number(i)
		});
	}

	next = () => {
		if (this.state.currentPhoto < this.state.photos.length - 1) {
			this.setState({
				currentPhoto: this.state.currentPhoto + 1
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
		else {
			this.close();
		}
	}

  render = () => {

		const photos = this.state.photos.map( (photo, i) => <img onClick={() => this.open(i)} src={photo} key={i}></img> )

		const loading = () => {
			return !this.state.loaded ? 'on' : null;
		}

		const title = (name) => {
			name = name.split("_");
			name = name.join(" ");
			return titlecase.toTitleCase(name)
		}


		const modalInstance = (
				<Modal show={this.state.showModal}>
					<div className="modal-dialog">
						<i id="prev-photo" className="fas fa-angle-left" onClick={this.prev} ></i>

						<div className="modal-image-container">
							<a role="button" className="close" onClick={this.close}>×</a>
							<img src={this.state.photos[this.state.currentPhoto]} />
						</div>

						<i id="next-photo" className="fas fa-angle-right" onClick={this.next} ></i>
					</div>
				</Modal>
		);

    return (

      <div className="content">
        <div className="index mosaic">
          <div className="col-md-12 top-banner creations-banner">
            <h1>Creations</h1>
            <p className="banner-subtitle-material">Select a group name to explore what's being made inside the ImagArena®.</p>
          </div>

					<GroupSelector />

  				<div className="mosaic-container">
  					<div id="loading-indicator" className={loading()}>
  						<div className="loading-container">
  							<img src='http://imagarenastatic.s3.amazonaws.com/loadinggif.gif' />
  						</div>

  					</div>

  					<h3 id="group-name" className="main-header">{title(this.props.params.groupName)}</h3>

  					{photos}
  				</div>
        </div>
				{modalInstance}
      </div>
    );
  }
}


export default Photos;
