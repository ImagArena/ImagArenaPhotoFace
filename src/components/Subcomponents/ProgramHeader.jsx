import React, { Component } from 'react';


export default class ProgramHeader extends Component {

  constructor() {
    super();
  }

  render = () => {
    return (
      <div className="index">
        <div id="faq" className="content">
          <div className="row">
            <div className={"col-md-12 top-banner " + this.props.color} >
              <img src={require("../../images/" + this.props.image + ".png")} className="img-fluid img-test" alt="Responsive image" />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

