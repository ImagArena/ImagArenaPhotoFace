import React from 'react';
import Axios from 'axios';

class RandomPic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      a:    null,
      b:    null,
      flag: false
    }
  }

  componentDidMount = () => {
    this.getRandomPhoto();

    setInterval(this.getRandomPhoto.bind(this), (this.props.seconds || 5) * 1000);
  }

  getRandomPhoto = () => {
    Axios.get('http://localhost:3001/get_random_photo').then(
      (response) => {
        if (response.data.url == this.state.a)
            this.getRandomPhoto();

        else {
          this.setState(this.state.flag ? {a: response.data.url, flag: !this.state.flag} : {b: response.data.url, flag: !this.state.flag});
        }
      },
      (error) => {
        console.error(error);
      }
    )
  }

  render = () => {
    return (
      <div id="random-pic-container">
        <img id="image-a" src={this.state.a} className={"random-photo" + ( this.state.flag ? " transparent" : "")} />
        <img id="image-b" src={this.state.b} className={"random-photo" + (!this.state.flag ? " transparent" : "")} />
      </div>
    )
  }
}

export default RandomPic;
