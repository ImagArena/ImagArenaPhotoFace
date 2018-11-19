import React, { Component } from 'react';


export default class InfoContainer extends Component {

  constructor() {
    super();
  }

  render = () => {
    return (
      <div id="welcome" className={"bannerpic " + this.props.bannerPic}>
        <div className="col-lg-6">
          <h2>{this.props.title}</h2>
          {this.props.text}
        </div>
      </div>
    )
  }

}

