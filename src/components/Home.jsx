require('normalize.css/normalize.css');
require('styles/bootstrap.css');
require('styles/custom.css');

import React from 'react';
import { Link } from 'react-router';
import PicBanner from './Subcomponents/PicBanner';

class Home extends React.Component {

  constructor() {
    super();
  }

  componentDidMount = () => {
    var youtubeIframe = '<iframe id="youtube-vid" width="840" height="473" src="https://www.youtube.com/embed/-mhQzPnsTr4?rel=0&amp;controls=0" frameborder="0" allowfullscreen></iframe>';

    $(document).ready(function () {

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
    if ($('#welcome').offset()) {
      $('html, body').animate({
        scrollTop: $('#welcome').offset().top - parseInt($('.content').css('padding-top'))
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
              <h1>Some Slogan / Motto</h1>
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
                <h2>Header Text</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a href="mailto:contact@imagarena.com?subject=ImagArena Booking Request" target="_blank"><button type="button" className="btn btn-primary btn-lg">Book An Event <i className="fa fa-chevron-right"></i></button></a>
              </div>
            </div>


            <div className="row align-items-center stripe1 blue">
              <div className="col-lg"></div>
              <div className="col-lg-5 col-12">
                <img src={require("../images/3d.png")} className="img-fluid" alt="Responsive image" />
              </div>
              <div className="col-lg-3">
                <h2>STEM / Design Thinking Text</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>
              <div className="col-lg"></div>
            </div>
          </div>

          {/* programs */}
          <div id="programs" className="container program-area">
            <div className="row">
              <div className="col-lg-2">
              </div>
              <div className="col-lg-8 program-descriptions">
                <center><h1>Our Programs</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></center>
              </div>
              <div className="col-lg-2">
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <Link to='kidsprograms'><img src={require("../images/kidsprograms.png")} className="img-fluid modules" alt="Responsive image" /></Link>
              </div>
              <div className="col-lg-4">
                <Link to='familyevents'><img src={require("../images/familyevents.png")} className="img-fluid modules" alt="Responsive image" /></Link>
              </div>
              <div className="col-lg-4">
                <Link to='teambuilding'><img src={require("../images/teambuilding.png")} className="img-fluid modules" alt="Responsive image" /></Link>
              </div>
            </div>
          </div>

          <PicBanner
            color="orange whitetext"
            title="Credibility Text"
            text={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>}
            image="massachusetts"
          />



          {/* banners 
          <div className="container-fluid">


            <div className="row align-items-center smallstripe-home">
              <div className="col-md">
                <h3 className="text-center">Something clickable here "" </h3>
              </div>
            </div>

          </div>*/}

          <div className="container">
            <div className="row endbook">
              <div className="col-md-6">
                <img src={require("../images/endbook.png")} className="img-fluid" alt="Responsive image" />
              </div>
              <div className="col-md-6">
                <h2>Experience ImagArena</h2>
                <p>We’re creating an experience where everyone is empowered to be imaginative.  <strong>See it for yourself.</strong></p>
                <a href="mailto:contact@imagarena.com?subject=ImagArena Booking Request" target="_blank"><button type="button" className="btn btn-primary btn-lg">Book An Event <i className="fa fa-chevron-right"></i></button></a>
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
                  <p className="text-center bottom-home">Our instructors always arrive early to ensure a punctual start time for each session.</p>
                </div>
              </div>
              <div className="col-md glyphboy">
                <img src={require("../images/plugplay.svg")} className="img-fluid" alt="Responsive image" />
                <div>
                  <h3 className="text-center">Easy Setup</h3>
                  <p className="text-center bottom-home">
                    We provide all the materials and setup is as easy as plugging into your classroom projector.
                </p>
                </div>
              </div>
              <div className="col-md glyphboy">
                <img src={require("../images/nomess.svg")} className="img-fluid" alt="Responsive image" />
                <div>
                  <h3 className="text-center">No Mess</h3>
                  <p className="text-center nobold bottom-home">The materials we use are completely reusable and each room is left as it was before.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}




export default Home;
