require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


class Programs extends React.Component {

	constructor() {
		super();
	}

  render = () => {
    return (
      <div className="index">
				<div className="container-fluid">

		        <div className="row">
		          <div className="col-lg-8 col-lg-offset-2">
		              <p><strong>ImagArena®</strong> is an exciting and hands-on program where <strong>participants ages 6+</strong> explore the power of imagination through <strong>open-ended building exercises</strong>.  Much more than a typical building workshop, ImagArena® combines innovative presentation techniques with game design elements to provide an experience that <strong>engages all types of learners</strong>.  Whether you’re looking for an after-school workshop, a summer camp, a school assembly or a special event, we have programs that <strong>everyone can enjoy</strong>.</p>
		          </div>
		        </div>

		        <hr />

		        <div className="row">
		          <div className="col-lg-6 col-lg-offset-3">
		              <img src={'../images/programs_6week.png'} className="img-responsive" alt="Responsive image" />
		          </div>
		          <div className="col-lg-6 col-lg-offset-3">
		              <p className="text-left">ImagArena® 6 Week is a total imagination experience.  Participants create with over 30 different building <a id="materials-text" href="materials_v1.html">MATERIALS</a>, and over the course of 6 sessions they discover the power of their imagination while learning strategies for overcoming creative blocks and working in teams.  After each session photos of participants work are posted online for family and friends to view, and by checking out the <a id="creations-text" href="creations.html">CREATIONS</a> page you can get an inside glimpse of what it’s like inside an ImagArena® 6 Week program.  </p>
		              <br />
		              <h4 className="text-left"><strong>Duration:</strong> (6) 45 Minute Sessions</h4>
		              <h4 className="text-left"><strong>Min / Max group size:</strong> 5-20</h4>
		              <h4 className="text-left"><strong>Great for:</strong> After School Programs, Summer Camps</h4>
		              <a href="mailto:contact@imagarena.org"><input className="btn btn-custom btn-lg" type="button" value="Request Booking Info" /></a>
		              <blockquote>
		                  <p className="quote"><em>"ImagArena® is a flavor-burst of education, and its impact is far-reaching, going well beyond art instruction. It energizes students and inspires teachers, each of which has immense value in itself."</em></p>
		                  <footer>Justin Hajj / Head 6th Grade Teacher / The Learning Project Elementary School / Boston, MA</footer>
		              </blockquote>

		          </div>
		        </div>

		      <hr />

		        <div className="row">
		          <div className="col-lg-6 col-lg-offset-3">
		              <img src={'../images/programs_papercraft.png'} className="img-responsive" alt="Responsive image" />
		          </div>
		          <div className="col-lg-6 col-lg-offset-3">
		              <p className="text-left">ImagArena® Papercraft is a standalone imagination recharge.  Rather than using reusable building materials like the 6 Week program, participants create with consumable materials like paper, tape and stickers in an energetic format characteristic of every ImagArena program.  At the end of the workshop they have the option of taking their creations home to share with family and friends. </p>
		              <br />
		              <h4 className="text-left"><strong>Duration:</strong>  45 Minute Workshop (30 Minute Option Available)</h4>
		              <h4 className="text-left"><strong>Min / Max group size:</strong> 5-20+</h4>
		              <h4 className="text-left"><strong>Great for:</strong> Summer Camps, School Assemblies, Libraries, After School Programs</h4>
		              <a href="mailto:contact@imagarena.org"><input className="btn btn-custom btn-lg" type="button" value="Request Booking Info" /></a>
		              <blockquote>
		                  <p className="quote"><em>"ImagArena® interactive program prompted the participants to develop critical thinking and problem solving skills while having a rousing good time learning!  The MGH Youth Zone staff wholeheartedly recommends ImagArena® to any school or organization that is looking for a professional, lively presentation."</em></p>
		                  <footer>Leslie Heffron, RN, BSN, Med. / Program Director / Massachusetts General Hospital Youth Zone / Boston, MA</footer>
		              </blockquote>

		          </div>
		        </div>

		      <hr />

		        <div className="row">
		          <div className="col-lg-6 col-lg-offset-3">
		              <img src={'../images/programs_custom.png'} className="img-responsive" alt="Responsive image" />
		          </div>
		          <div className="col-lg-6 col-lg-offset-3">
		              <p className="text-left">Because the ImagArena® framework is so flexible, we can customize a program to your organizations exact needs.  Is there a duration, group size, or weekly format you have in mind that isn’t represented in our other programs?  Contact us today and together we can develop an exciting and inspiring imagination experience for any venue.</p>
		              <br />
		              <h4 className="text-left"><strong>Duration:</strong> ? ? ?</h4>
		              <h4 className="text-left"><strong>Min / Max group size:</strong> ? ? ?</h4>
		              <h4 className="text-left"><strong>Great for:</strong> Any place where people gather</h4>
		              <a href="mailto:contact@imagarena.org"><input className="btn btn-custom btn-lg" type="button" value="Request Booking Info" /></a>
		              <blockquote>
		                  <p className="quote"><em>"The materials were attractive, appealing and designed to give the participants a full sensory experience. We highly recommend the ImagArena® program for organizations looking for an alternative way to incorporate a fun and challenging component to their curriculum."</em></p>
		                  <footer>Paula Cuneo / Lead Teacher / Christian Family Montesorri School / Holliston, MA</footer>
		              </blockquote>

		          </div>
		        </div>

		        <center><p id="copyright"><small>Copyright © 2017 ImagArena®</small></p></center>

		    </div>
			</div>
    );
  }
}


export default Programs;
