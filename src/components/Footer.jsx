import React, { Component } from 'react';


export default class Footer extends Component {

  constructor() {
    super();
  }

  render = () => {
    return (
      <div className="container-fluid footer-bar">
        <div className="row footer-footer">
          <div className="col-md text-center"><p><i className="fa fa-envelope"></i> contact@imagarena.com</p></div>
          <div className="col-md text-center"><p>©2019 ImagArena, LLC</p></div>
          <div className="col-md text-center"><p><i className="fa fa-map-marker-alt"></i> Boston, MA</p></div>
        </div>
      </div>
    )
  }

}

