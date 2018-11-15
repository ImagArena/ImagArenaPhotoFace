import React, { Component } from 'react';


export default class PicBanner extends Component {

  constructor() {
    super();
  }

  render = () => {
    return (
      <div className="container-fluid">
        <div className={"row align-items-center stripe2 " + this.props.color}>
          <div className="col-md"></div>
          <div className="col-md-4">
            <h2>{this.props.title}</h2>
            {this.props.text}
          </div>
          <div className="col-md-4">
            <img src={require("../../images/" + this.props.image + ".png")} className="img-fluid" alt="Responsive image" />
          </div>
          <div className="col-md"></div>
        </div>
      </div>
    )
  }

}

