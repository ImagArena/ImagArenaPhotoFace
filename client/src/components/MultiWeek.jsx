require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


class Home extends React.Component {

	constructor() {
		super();
	}

  componentDidMount = () => {
    $(document).ready(function() {
      $('.question').click(function() {
        $(this).toggleClass('open');
      })
    })
  }

  render = () => {
    return (
			<div className="index">
            <div id="faq" className="content">
              {/* Top Banner */}
							<div className="row">
                <div className="col-md-12 top-banner multi-banner">
                  <img src={require("../images/multitext.png")} className="img-fluid progtext" alt="Responsive image" />
                </div>
              </div>
					 </div>
{/* glyph heading */}
					<div className="container-fluid">
						<div className="row smallstripe4">
							<div className="col hide">
							</div>
								<div className="col glyphboy">
									<img src={require("../images/calendar.svg")} className="" alt="Responsive image" />
									<div>
										<p className="text-center">(6) 45-Minute Sessions</p>
									</div>
								</div>
								<div className="col glyphboy">
									<img src={require("../images/groupsize.svg")} className="" alt="Responsive image" />
									<div>
										<p className="text-center">20 Participants Max. Per Group</p>
									</div>
								</div>
								<div className="col glyphboy">
									<img src={require("../images/age.svg")} className="" alt="Responsive image" />
									<div>
										<p className="text-center">Ages 5-12</p>
									</div>
								</div>
								<div className="col hide">
								</div>
							</div>
						</div>
{/* body */}
						<div className="container container-prog">
							<div className="row">
								<div className="col-lg progpic">
									<img src={require("../images/workshop.png")} className="img-fluid stock" alt="Responsive image" />
								</div>
								<div className="col-lg prog-text">
									<p>Over the course of multiple weeks participants create with over 30 building materials and learn strategies for overcoming creative blocks and working in teams. At the end of the program their creations are posted online to share with family and friends. Great for organizations looking to add a new and exciting enrichment program to their offerings.</p>
									<a href="mailto:contact@imagarena.org?subject=ImagArena Booking Request" target="_blank"><button type="button" className="btn btn-outline-primary-green progbutton">Request Booking Info <i className="fa fa-chevron-right"></i></button></a>
								</div>
							</div>
						</div>
			</div>
    );
  }
}

export default Home;
