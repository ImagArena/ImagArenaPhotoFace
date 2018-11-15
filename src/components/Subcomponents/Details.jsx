import React, { Component } from 'react';


export default class Details extends Component {

  constructor() {
    super();
  }

  render = () => {
    return (
      <div className="container-fluid">
        <div className="row smallstripe4">
          <div className="col hide">
          </div>
          <div className="col glyphboy">
            <img src={require("../../images/" + this.props.imgOne + ".svg")} className="img-fluid" alt="Responsive image" />
            <div>
              <p className="text-center">{this.props.textOne}</p>
            </div>
          </div>
          <div className="col glyphboy">
            <img src={require("../../images/" + this.props.imgTwo + ".svg")} className="img-fluid" alt="Responsive image" />
            <div>
              <p className="text-center">{this.props.textTwo}</p>
            </div>
          </div>
          <div className="col glyphboy">
            <img src={require("../../images/" + this.props.imgThree + ".svg")} className="img-fluid" alt="Responsive image" />
            <div>
              <p className="text-center">{this.props.textThree}</p>
            </div>
          </div>
          <div className="col hide">
          </div>
        </div>
      </div>
    )
  }

}

