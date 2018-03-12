require('normalize.css/normalize.css');
require('styles/bootstrap.css');
require('styles/custom.css');

import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {

	constructor() {
		super();
	}

  componentDidMount = () => {
    var youtubeIframe = '<iframe id="youtube-vid" width="840" height="473" src="https://www.youtube.com/embed/-mhQzPnsTr4?rel=0&amp;controls=0" frameborder="0" allowfullscreen></iframe>';

    $(document).ready(function(){

      $('#video-modal').on('show.bs.modal', function (event) {
        $("#bgvid").get(0).pause();
        $("#close-div").after(youtubeIframe);
        $("#youtube-vid")[0].src += "&autoplay=1";
      });

      $('#video-modal').on('hide.bs.modal', function (event) {
        $("#bgvid").get(0).play();
        $("#youtube-vid").remove();
      });

    });
  }

  handleScroll = () => {
    if ($( '#welcome' ).offset()) {
      $('html, body').animate({
          scrollTop: $( '#welcome' ).offset().top - parseInt($('.content').css('padding-top'))
      }, 300);
    }
  }

  render = () => {
    return (
			<div className="index">
        <div id="video-modal" className="modal">
        <div className="flexer">
          <div>
            <div id="close-div">
              <button title="Close (Esc)" type="button" className="video-closer" data-dismiss="modal">×</button>
            </div>


          </div>
        </div>
      </div>

      <div className="content">
        {/* banners */}
        <div className="">
          <div className="videoholder">
            <h1>The Ultimate Imagination Experience</h1>
            <a id="video-play" data-toggle="modal" data-target="#video-modal">
              <img src={require("../images/play-button.svg")} />
            </a>
            <video autoPlay="true" loop id="bgvid" muted="true">
                <source src={require("../images/bgvid.mp4")} type="video/mp4" />
            </video>

            <a id="down-arrow" href="#welcome" onClick={this.handleScroll}><i className="fa fa-chevron-down"></i></a>

          </div>

          <div id="welcome" className="banner1">
            <div className="col-lg-5">
              <h2>Welcome to the ImagArena</h2>
              <p>ImagArena is a new <strong>building workshop</strong> for designed to awaken the imaginative abilities of <strong>every individual</strong>.</p>
              <a href="mailto:contact@imagarena.org?subject=ImagArena Booking Request" target="_blank"><button type="button" className="btn btn-primary btn-lg">Book Now <i className="fa fa-chevron-right"></i></button></a>
            </div>
          </div>

            <div className="row align-items-center stripe1">
              <div className="col-lg"></div>
              <div className="col-lg-5 col-12">
                <img src={require("../images/3d.png")} className="img-fluid" alt="Responsive image" />
              </div>
              <div className="col-lg-3">
                <h2>The Ultimate Imagination Experience</h2>
                <p>More than a typical building workshop, ImagArena® combines the spirit of an art program, the materials of a building workshop, and the framework of a video game to provide an experience that engages everyone</p>
              </div>
              <div className="col-lg"></div>
          </div>
        </div>

				{/* banners */}
				<div className="container-fluid">
					<div className="row align-items-center stripe2">
						<div className="col-md"></div>
						<div className="col-md-4">
							<h2>Schools <i className="fa fa-heart"></i> ImagArena</h2>
							<p>We’ve run programs in over 30 schools across Massachusetts.  Directors love our programs for their originality, consistency, and levels of student engagement.</p>
						</div>
						<div className="col-md-4">
							<img src={require("../images/massachusetts.png")} className="img-fluid" alt="Responsive image" />
						</div>
						<div className="col-md"></div>
					</div>
				</div>

        {/* programs */}
        <div id="programs" className="container program-area">
          <div className="row">
						<div className="col-lg-2">
						</div>
						<div className="col-lg-8">
							<center><h1>Enrichment Programs</h1>
							<p>Programs for directors looking for <strong>weekly enrichment</strong>, events for <strong>vacation days</strong>, or entertainment for <strong>summer camps</strong>.</p></center>
						</div>
						<div className="col-lg-2">
						</div>
					</div>
					<div className="row">
						<div className="col-lg-2">
						</div>
            <div className="col-lg-4">
              <Link to='multiweek'><img src={require("../images/multiweekbutton.png")} className="img-fluid modules" alt="Responsive image" /></Link>
            </div>
						<div className="col-lg-4">
              <Link to='workshop'><img src={require("../images/workshopbutton.png")} className="img-fluid modules" alt="Responsive image" /></Link>
            </div>
						<div className="col-lg-2">
						</div>
          </div>
				</div>

				{/* banners */}
				<div className="container-fluid">
					<div className="row align-items-center stripe4">
						<div className="col-md"></div>
						<div className="col-md-4">
							<h2>Flexible Programming</h2>
							<p>ImagArena events can be run anywhere where people gather.  The program is designed to engage participants of all ages and to provide an exciting creative experience unlike any other.</p>
						</div>
						<div className="col-md-4">
							<img src={require("../images/flexible.png")} className="img-fluid" alt="Responsive image" />
						</div>
						<div className="col-md"></div>
					</div>
				</div>



				{/* programs */}
        <div id="programs" className="container program-area">
					<div className="row">
						<div className="col-lg-2">
						</div>
						<div className="col-lg-8">
							<center><h1>Special Events</h1>
							<p>Bring the ultimate imagination experience to your <strong>home</strong> or <strong>workplace</strong> with an ImagArena event.</p></center>
						</div>
						<div className="col-lg-2">
						</div>
					</div>
					<div className="row">
            <div className="col-lg-4">
            </div>
						<div className="col-lg-4">
              <Link to='birthday'><img src={require("../images/birthdaypartybutton.png")} className="img-fluid modules" alt="Responsive image" /></Link>
            </div>
						<div className="col-lg-4">
            </div>
          </div>
				</div>



        {/* banners */}
        <div className="container-fluid">


          <div className="row align-items-center smallstripe2">
            <div className="col-md">
              <h3 className="text-center">{/* <i className="fa fa-eye fa-lg"></i> */} See what's being created <Link to="/creations" className="btn btn-outline-light">Explore ImagArena Creations <i className="fa fa-chevron-right"></i></Link></h3>
            </div>
          </div>

        </div>
				<div className="row">
					 <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="0">
						 <ol className="carousel-indicators">
							 <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
							 <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
							 <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
						 </ol>
						 <div className="carousel-inner">

							 <div className="carousel-item active">
								 <h3>
									 "ImagArena is a flavor-burst of education, and its impact is far-reaching, going well beyond art instruction.
									 It energizes students and inspires teachers, each of which has immense value in itself. If you’re looking for a unique arts program to integrate into your classroom or school-site, I highly recommend ImagArena."
								 </h3>
								 <p>
									 - Justin Hajj
									 Head 6th Grade Teacher / The Learning Project Elementary School / Boston, MA
								 </p>
							 </div>

							 <div className="carousel-item">
								 <h3>
									 “The quick pace captured the children’s attention and kept them involved for the duration of the program.
									 The materials were attractive, appealing and designed to give the children a full
									 sensory experience.  We highly recommend the Imagarena program for schools looking for an
									 alternative way to incorporate a fun and challenging component to their
									 Curriculum.”
								 </h3>
								 <p>
									 - Paula Cuneo
									 Lead Teacher / Christian Family Montessori School / Holliston, MA
								 </p>
							 </div>

							 <div className="carousel-item">
								 <h3>
									 “The ImagArena interactive program prompted the participants to develop critical thinking and problem solving skills while having rousing good time learning!
									 The MGH Youth Zone staff wholeheartedly recommends ImagArena to any school or organization that is looking for a professional, lively presentation.”
								 </h3>
								 <p>
									 - Leslie Heffron, RN, BSN, MEd.
									 Director / MGH Revere Youth Zone / Revere, MA
								 </p>
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


        {/* end */}
        <div className="container">
          <div className="row endbook">
            <div className="col-md-6">
              <img src={require("../images/endbook.png")} className="img-fluid" alt="Responsive image" />
            </div>
            <div className="col-md-6">
              <h2>Experience ImagArena</h2>
              <p>We’re creating an experience where everyone is empowered to be imaginative.  <strong>See it for yourself.</strong></p>
              <a href="mailto:contact@imagarena.org?subject=ImagArena Booking Request" target="_blank"><button type="button" className="btn btn-primary btn-lg">Book Now <i className="fa fa-chevron-right"></i></button></a>
            </div>
          </div>
        </div>

        {/* banners */}
        <div className="container-fluid">
          <div className="row smallstripe3">

            <div className="col-md glyphboy">
              <img src={require("../images/ontime.svg")} className="img-fluid" alt="Responsive image" />
              <div>
                <h3 className="text-center">On Time</h3>
                <p className="text-center">Our instructors always arrive early to ensure a punctual start time for each session.</p>
              </div>
            </div>
            <div className="col-md glyphboy">
              <img src={require("../images/plugplay.svg")} className="img-fluid" alt="Responsive image" />
              <div>
                <h3 className="text-center">Easy Setup</h3>
                <p className="text-center">
                  We provide all the materials and setup is as easy as plugging into your classroom projector.
                </p>
              </div>
            </div>
            <div className="col-md glyphboy">
              <img src={require("../images/nomess.svg")} className="img-fluid" alt="Responsive image" />
              <div>
                <h3 className="text-center">No Mess</h3>
                <p className="text-center nobold">The materials we use are completely reusable and each room is left as it was before.</p>
              </div>
            </div>

          </div>

          {/* <div className="row footer">
            <div className="col text-align-cetner">
              <center><p>Copyright © 2017 ImagArena®</p></center>
            </div>
          </div> */}
        </div>
      </div>
</div>
    );
  }
}




export default Home;
