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
                <div className="col-md-12 top-banner workshop-banner">
                  <img src={require("../images/workshoptext.png")} className="img-fluid progtext" alt="Responsive image" />
                </div>
              </div>
					 </div>
{/* glyph heading */}
					<div className="container-fluid">
						<div className="row smallstripe4">
							<div className="col hide">
							</div>
								<div className="col glyphboy">
									<img src={require("../images/duration.svg")} className="img-fluid" alt="Responsive image" />
									<div>
										<p className="text-center">45-Minute Session</p>
									</div>
								</div>
								<div className="col glyphboy">
									<img src={require("../images/groupsize.svg")} className="img-fluid" alt="Responsive image" />
									<div>
										<p className="text-center">20 Participants Max. Per Group</p>
									</div>
								</div>
								<div className="col glyphboy">
									<img src={require("../images/age.svg")} className="img-fluid" alt="Responsive image" />
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
									<img src={require("../images/multiweek.png")} className="img-fluid stock" alt="Responsive image" />
								</div>
								<div className="col-lg prog-text">
									<p>Participants engage in energetic building challenges featuring over a dozen building materials. At the end of the workshop their creations are posted online to share with family and friends. A perfect solution for vacation day / summer programs looking for an exciting hands-on activity.</p>
									<img src={require("../images/camps.png")} className="img-fluid stock" alt="Responsive image" />
									<a href="mailto:contact@imagarena.org?subject=ImagArena Booking Request" target="_blank"><button type="button" className="btn btn-outline-primary-blue">Request Booking Info <i className="fa fa-chevron-right"></i></button></a>
								</div>
							</div>
						</div>
			</div>
    );
  }
}

export default Home;
