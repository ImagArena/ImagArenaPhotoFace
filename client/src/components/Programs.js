require('normalize.css/normalize.css');
require('styles/App.scss');

import { Link } from 'react-router';
import React from 'react';

import SixWeek1 from '../images/programs/6wk_1.gif';
import SixWeek2 from '../images/programs/6wk_2.gif';
import SixWeek3 from '../images/programs/6wk_3.gif';

import Custom1 from '../images/programs/custom_1.gif';
import Custom2 from '../images/programs/custom_2.gif';
import Custom3 from '../images/programs/custom_3.gif';

import Paper1 from '../images/programs/paper_1.gif';
import Paper2 from '../images/programs/paper_2.gif';
import Paper3 from '../images/programs/paper_3.gif';


class Programs extends React.Component {

	constructor() {
		super();
	}

	componentDidMount = () => {
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();

			var target = this.hash;
			var $target = $(target);

			$('html, body').stop().animate({

					'scrollTop': $target.offset().top - 60

			}, 700, 'swing', function () {

					window.location.hash = target;

			});
		});
	}

	componentWillUnmount = () => {
		$('a[href^="#"]').off('click');
	}

  render = () => {
    return (
      <div className="index">
				<div className="container-fluid">

				<div className="row programselect">
					<div className="col-lg-4 col-sm-4">
							<a className="program-link" href="#6week"><img src={require('../images/programs_6week.png')} className="img-responsive" alt="Responsive image" /></a>
					</div>
					<div className="col-lg-4 col-sm-4">
							<a className="program-link" href="#papercraft"><img src={require('../images/programs_papercraft.png')} className="img-responsive" alt="Responsive image" /></a>
					</div>
					<div className="col-lg-4 col-sm-4">
							<a className="program-link" href="#custom"><img src={require('../images/programs_custom.png')} className="img-responsive" alt="Responsive image" /></a>
					</div>
				</div>

				<div className="row programheader">
					<div className="col-lg-8 col-lg-offset-2">
							<p><strong>ImagArena®</strong> is an exciting and hands-on program where <strong>participants ages 6+</strong> explore the power of imagination through <strong>open-ended building exercises</strong>.  More than a typical building workshop, ImagArena® combines innovative presentation techniques with game design elements to provide an experience that <strong>engages all types of learners</strong>.  Whether you’re looking for an after-school workshop, a summer camp, a school assembly or a special event, we have programs that <strong>everyone can enjoy</strong>.</p>
					</div>
				</div>

        <div className="row graydiv" id="6week">
          <div className="col-lg-6 col-lg-offset-3">
              <img src={require('../images/programs_6week.png')} className="img-responsive" alt="Responsive image" />
          </div>
          <div className="col-lg-6 col-lg-offset-3">
              <p className="text-left"><strong>ImagArena® 6 Week</strong> is a total imagination experience.  Participants imagine and create with over 30 different building <Link id="materials-text" to="/materials">MATERIALS</Link>, and over the course of 6 sessions they discover the power of their imagination while learning strategies for overcoming creative blocks and engaging in teams.  After every session, photos are posted online displaying the work of each participant on the <Link id="creations-text" to="/creations">CREATIONS</Link> page. This allows family and friends to get an inside look of what it’s like inside the ImagArena® 6 Week program.  </p>
              <div className="gif-container">
								<img src={SixWeek1} />
								<img src={SixWeek2} />
								<img src={SixWeek3} />
              </div>
              <h4 className="text-left"><strong>Duration:</strong> (6) 45 Minute Sessions</h4>
              <h4 className="text-left"><strong>Min / Max group size:</strong> 5-20</h4>
              <h4 className="text-left"><strong>Great for:</strong> After School Programs, Summer Camps</h4>
              <a href="mailto:contact@imagarena.org"><input className="btn btn-custom btn-lg" type="button" value="Request Booking Info" /></a>

          </div>
        </div>

        <div className="row" id="papercraft">
          <div className="col-lg-6 col-lg-offset-3">
              <img src={require('../images/programs_papercraft.png')} className="img-responsive" alt="Responsive image" />
          </div>
          <div className="col-lg-6 col-lg-offset-3">
              <p className="text-left"><strong>ImagArena® Papercraft</strong> is a standalone imagination recharge.  Rather than using reusable building materials like the 6 Week program, participants create with consumable materials like paper, tape and stickers in an energetic format characteristic of every ImagArena program.  At the end of the workshop they have the option of taking their creations home to share with family and friends. </p>
							<div className="gif-container">
								<img src={Paper1} />
								<img src={Paper2} />
								<img src={Paper3} />
							</div>
              <h4 className="text-left"><strong>Duration:</strong>  45 Minute Workshop (30 Minute Option Available)</h4>
              <h4 className="text-left"><strong>Min / Max group size:</strong> 5-20+</h4>
              <h4 className="text-left"><strong>Great for:</strong> Summer Camps, School Assemblies, Libraries, After School Programs</h4>
              <a href="mailto:contact@imagarena.org"><input className="btn btn-custom btn-lg" type="button" value="Request Booking Info" /></a>


          </div>
        </div>

        <div className="row graydiv" id="custom">
          <div className="col-lg-6 col-lg-offset-3">
              <img src={require('../images/programs_custom.png')} className="img-responsive" alt="Responsive image" />
          </div>
          <div className="col-lg-6 col-lg-offset-3">
              <p className="text-left">Because the ImagArena® framework is so flexible, we can customize a program to your organizations exact needs.  Is there a duration, group size, or weekly format you have in mind that isn’t represented in our other programs?  Contact us today and together we can develop an exciting and inspiring imagination experience for any venue.</p>
							<div className="gif-container">
								<img src={Custom1} />
								<img src={Custom2} />
								<img src={Custom3} />
							</div>
              <h4 className="text-left"><strong>Duration:</strong> ? ? ?</h4>
              <h4 className="text-left"><strong>Min / Max group size:</strong> ? ? ?</h4>
              <h4 className="text-left"><strong>Great for:</strong> Any place where people gather</h4>
              <a href="mailto:contact@imagarena.org"><input className="btn btn-custom btn-lg" type="button" value="Request Booking Info" /></a>


          </div>
        </div>

        <center><p id="copyright"><small>Copyright © 2017 ImagArena®</small></p></center>

		    </div>
			</div>
    );
  }
}


export default Programs;
