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
            <h1>Expand your imagination</h1>
            <a id="video-play" data-toggle="modal" data-target="#video-modal">
              <img src={require("../images/play-button.svg")} />
            </a>
            <video autoPlay="true" loop id="bgvid" muted="true">
                <source src={require("../images/bgvid.mp4")} type="video/mp4" />
            </video>

            <a id="down-arrow" href="#welcome"><i className="fa fa-chevron-down"></i></a>

          </div>

          <div id="welcome" className="banner1">
            <div className="col-lg-5">
              <h2>Welcome to the ImagArena</h2>
              <p>ImagArena is a new building workshop for ages 6+ designed to awaken the imaginative abilities of every individual.</p>
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
                <p>More than a typical building workshop, ImagArena® combines the spirit of an art program, the materials of a building workshop, and the framework of a video game to provide an experience that engages all types of learners.</p>
              </div>
              <div className="col-lg"></div>
          </div>
        </div>

        {/* programs */}
        <div id="programs" className="container">

          <div className="row">
            <div className="col-md-6 stock">
              <img src={require("../images/multiweek.png")} className="img-fluid stock" alt="Responsive image" />
            </div>
            <div className="col-md-6 icon">
              <h3><img src={require("../images/icon_multi.png")} className="img-fluid" alt="Responsive image" /> Multi-Week</h3>
              <p>Over the course of 6 weeks participants create with over 30 building materials and learn strategies for overcoming creative blocks and working in teams.  At the end of the program their creations are posted online to share with family and friends.  Great for after school programs looking to add a new and exciting enrichment program to their offerings.</p>
              <p>
                <i className="fa fa-clock-o fa-lg"></i> (6) 45-Minute Sessions
                <br className="hidden-lg" />
                <i className="fa fa-child fa-lg"></i> 20 Participants Max.
              </p>
              <a href="https://s3.amazonaws.com/imagarenastatic/ImagArena_Multi-Week.pdf" target="_blank"><button type="button" className="btn btn-outline-primary"><i className="fa fa-file"></i> Multi-Week Flyer</button></a>
              <a href="mailto:contact@imagarena.org?subject=ImagArena Booking Request" target="_blank"><button type="button" className="btn btn-outline-primary">Request Booking Info <i className="fa fa-chevron-right"></i></button></a>
            </div>
          </div>

          <div className="row flex-md-row-reverse">
            <div className="col-md-6 stock">
              <img src={require("../images/workshop.png")} className="img-fluid stock" alt="Responsive image" />
            </div>
            <div className="col-md-6 icon">
              <h3><img src={require("../images/icon_workshop.png")} className="img-fluid " alt="Responsive image" /> Workshop</h3>
              <p>Participants engage in energetic building challenges featuring over a dozen building materials.  At the end of the workshop they take a creation home to share with family and friends.  A perfect solution for full day / vacation day programs or any organization looking to try out the ImagArena experience.</p>
              <p>
                <i className="fa fa-clock-o fa-lg"></i> 45-Minute Session
                <br className="hidden-lg" />
                <i className="fa fa-child fa-lg"></i> 20 Participants Max.
              </p>
              <a href="https://s3.amazonaws.com/imagarenastatic/ImagArena_Workshop.pdf" target="_blank"><button type="button" className="btn btn-outline-primary"><i className="fa fa-file"></i> Workshop Flyer</button></a>
              <a href="mailto:contact@imagarena.org?subject=ImagArena Booking Request" target="_blank"><button type="button" className="btn btn-outline-primary">Request Booking Info <i className="fa fa-chevron-right"></i></button></a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 stock">
              <img src={require("../images/bday.png")} className="img-fluid stock" alt="Responsive image" />
            </div>
            <div className="col-md-6 icon">
              <h3><img src={require("../images/icon_bday.png")} className="img-fluid" alt="Responsive image" /> Birthday Party</h3>
              <p>If you’re looking for an exciting in-home activity for your child’s birthday party, bring the ultimate imagination experience to your living room with an ImagArena birthday.  We simply plug in our display to your TV and run the session from there, and at the end of the activity each participant receives an ImagArena goodie bag.</p>
              <p>
                <i className="fa fa-clock-o fa-lg"></i> 45-Minute Session
                <br className="hidden-lg" />
                <i className="fa fa-child fa-lg"></i> 20 Participants Max.</p>
              <a href="https://s3.amazonaws.com/imagarenastatic/ImagArena_Birthday.pdf" target="_blank"><button type="button" className="btn btn-outline-primary"><i className="fa fa-file"></i> Birthday Party Flyer</button></a>
              <a href="mailto:contact@imagarena.org?subject=ImagArena Booking Request" target="_blank"><button type="button" className="btn btn-outline-primary">Request Booking Info <i className="fa fa-chevron-right"></i></button></a>
            </div>
          </div>
        </div>


        {/* banners */}
        <div className="container-fluid">

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
                    It energizes students and inspires teachers, each of which has immense value in itself.
                    If you’re looking for a unique arts program to integrate into your classroom or school-site, I highly recommend ImagArena."
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

          <div className="row align-items-center stripe2">
            <div className="col-md"></div>
            <div className="col-md-4">
              <h2>Schools <i className="fa fa-heart"></i> ImagArena</h2>
              <p>We’ve run programs in 15 school districts and over 25 schools across Massachusetts.  After-school directors love our programs for their originality, consistency, and levels of student engagement.</p>
            </div>
            <div className="col-md-4">
              <img src={require("../images/massachusetts.png")} className="img-fluid" alt="Responsive image" />
            </div>
            <div className="col-md"></div>
          </div>

          <div className="row align-items-center smallstripe2">
            <div className="col-md">
              <h3 className="text-center">{/* <i className="fa fa-eye fa-lg"></i> */} See what's being created <Link to="/creations" className="btn btn-outline-light">Explore ImagArena Creations <i className="fa fa-chevron-right"></i></Link></h3>
            </div>
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
              <p>We’re creating an experience where everyone is empowered to be imaginative.  See it for yourself.</p>
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
                  We provide all the materials, and setup is as easy as plugging into your classroom projector
                </p>
              </div>
            </div>
            <div className="col-md glyphboy">
              <img src={require("../images/nomess.svg")} className="img-fluid" alt="Responsive image" />
              <div>
                <h3 className="text-center">No Mess</h3>
                <p className="text-center">The materials we use are completely reusable, no messy paints or clays, and each room is left as it was before.</p>
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
