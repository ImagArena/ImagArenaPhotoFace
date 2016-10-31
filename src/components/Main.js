require('normalize.css/normalize.css');
require('styles/App.scss');
require('styles/bootstrap.css');

import React from 'react';
import {Modal} from 'react-bootstrap';

class Grid extends React.Component {

	constructor() {
		super();
		this.pics = [];
		this.state = {
			showModal: false,
			photo: null
		 };
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
		let pic_urls = [
			'https://imagarenaphotos.s3.amazonaws.com/testingtesting/FILE0023--1475357461183.JPG',
			'https://imagarenaphotos.s3.amazonaws.com/testingtesting/FILE0024--1475357461136.JPG',
			'https://imagarenaphotos.s3.amazonaws.com/testingtesting/FILE0025--1475357461134.JPG',
			'https://imagarenaphotos.s3.amazonaws.com/testingtesting/FILE0026--1475357461016.JPG',
			'https://imagarenaphotos.s3.amazonaws.com/testingtesting/FILE0027--1475357461014.JPG'
		]


		for (let i=0; i < pic_urls.length; i++) {
			let split = pic_urls[i].split('--');
			let more = split[1].split('.JPG');
			let timestamp = Number(more[0]);
			let date = new Date(timestamp);

			var picture = {
				date: date,
				url: pic_urls[i]
			}

			console.log(picture.date)




			this.pics.push(
				<img onClick={() => this.open(pic_urls[i])} src={pic_urls[i]} key={i}></img>
			);
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
				{modalInstance}
				<h2>Week 2</h2>
				{this.pics}
      </div>
    );
  }
}

Grid.defaultProps = {
};


export default Grid;
