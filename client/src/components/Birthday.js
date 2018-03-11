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
                <div className="col-md-12 top-banner birthday-banner">
                  <img src={require("../images/birthdaytext.png")} className="img-fluid progtext" alt="Responsive image" />
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
									<img src={require("../images/bday.png")} className="img-fluid stock" alt="Responsive image" />
								</div>
								<div className="col-lg prog-text">
									<p>If you’re looking for an exciting in-home activity for your child’s birthday party, bring the ultimate imagination experience to your living room with an ImagArena birthday. We simply plug in our display to your TV and run the session from there, and at the end of the activity each participant receives an ImagArena goodie bag.</p>
									<a href="mailto:contact@imagarena.org?subject=ImagArena Booking Request" target="_blank"><button type="button" className="btn btn-outline-primary-blue">Request Booking Info <i className="fa fa-chevron-right"></i></button></a>
								</div>
							</div>
						</div>
			</div>
    );
  }
}

export default Home;
