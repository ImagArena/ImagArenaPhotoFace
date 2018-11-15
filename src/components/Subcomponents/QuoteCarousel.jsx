import React, { Component } from 'react';


export default class QuoteCarousel extends Component {

  constructor() {
    super();
  }

  render = () => {
    return (
      <div className="row">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="0">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">

            <div className="carousel-item active">
              <h3>“{this.props.quoteOne}”</h3>
              <p>{this.props.personOne}</p>
            </div>

            <div className="carousel-item">
              <h3>“{this.props.quoteTwo}”</h3>
              <p>{this.props.personTwo}</p>
            </div>

            <div className="carousel-item">
              <h3>“{this.props.quoteThree}”</h3>
              <p>{this.props.personThree}</p>
            </div>

          </div>
          <span className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </span>
          <span className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </span>
        </div>
      </div>
    )
  }

}

