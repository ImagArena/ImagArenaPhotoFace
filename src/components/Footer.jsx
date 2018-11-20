import React, { Component } from 'react';


export default class Footer extends Component {

  constructor() {
    super();
  }

  render = () => {
    return (
      <div className="container-fluid footer-bar">
        <div className="row">
          <div className="col-md text-center"><p>contact@imagarena.com</p></div>
          <div className="col-md text-center"><p>©2019 ImagArena, LLC</p></div>
          <div className="col-md text-center"><p>Boston · New York · Los Angeles</p></div>
        </div>
      </div>
    )
  }

}

