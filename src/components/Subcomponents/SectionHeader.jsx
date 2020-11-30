import React, { Component } from 'react';


export default class SectionHeader extends Component {

  constructor() {
    super();
  }

  render = () => {
    return (
      <div className="row smallstripe2">
        <div className="col-md-12 top-banner">
          <img src={require("../../images/" + this.props.image + ".png")} className="header-image" alt="Responsive image" />
        </div>
      </div>
    )
  }

}

