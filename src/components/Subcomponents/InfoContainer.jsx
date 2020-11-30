import React, { Component } from 'react';


export default class InfoContainer extends Component {

  constructor() {
    super();
  }

  render = () => {
    return (
      <div className="container container-prog">
        <div className="row">
          <div className="col-lg progpic">
            <img src={require("../../images/" + this.props.image + ".png")} className="img-fluid stock" alt="Responsive image" />
          </div>
          <div className="col-lg prog-text">
            {this.props.text}
            <a href="mailto:contact@imagarena.com?subject=ImagArena Booking Request" target="_blank"><button type="button" className="btn btn-outline-primary-blue">{this.props.cta} <i className="fa fa-chevron-right"></i></button></a>
          </div>
        </div>
      </div>
    )
  }

}

