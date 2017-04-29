require('normalize.css/normalize.css');
require('styles/App.scss');

import { Link } from 'react-router';
import React from 'react';


class About extends React.Component {

	constructor() {
		super();
	}

  render = () => {
    return (
      <div className="index">
				<div className="container-fluid">

					<div className="row">
						<div className="col-lg-8 col-lg-offset-2">
								<p>By combining the <strong>spirit of an art program</strong>, the <strong>materials of a building workshop</strong>, and the <strong>framework of a video game</strong>, ImagArena® provides people of all ages the chance to freely explore their imaginative abilities.  The atmosphere created is inviting and fresh, where the <strong>imaginative process</strong> is emphasized over the judgment of product, and where ideas like “I am not creative”, “I am not artistic”, and “I am not imaginative” are left at the door.  It is a program unlike any other, designed to <strong>isolate the beauty and wonder of imagination</strong>, and to celebrate it.</p>
						</div>
					</div>



					<div className="row" id="graydivabout">
						<div className="col-md-4 col-md-offset-2">
								<h3><strong>Innovative Presentation Method</strong></h3>
								<p className="text-left">Much more than just an instructor and a curriculum, ImagArena® is a <strong>total audiovisual experience</strong> designed to engage 21st century learners.  <br /><br />Each session is guided by an <strong>automated projection system</strong> that sets the pace and introduces new activities.  The result is an environment that feels less like a ‘class’ and more like a <strong>‘futuristic imagination training session’</strong>.</p>
						</div>
						<div className="col-md-4">
								<img src={require('../images/about_audiovisual.png')} className="img-responsive" alt="Responsive image" />
						</div>
					</div>

				<br />

				<div className="row">
					<div className="col-md-4 col-md-offset-2">
							<img src={require('../images/about_materials.png')} className="img-responsive" alt="Responsive image" />
					</div>
					<div className="col-md-4">
							<h3><strong>Curated Materials</strong></h3>
							<p className="text-left">The materials used in ImagArena® activities are carefully chosen to allow for <strong>unrestricted imaginative expression</strong>.<br /><br />Drawing from a vast library of <strong>three-dimensional building materials</strong>, ImagArena activities are hands on and focused on the <strong>rapid creation</strong> and recycling of ideas. Check out the <Link id="materials-text" to="/materials">MATERIALS</Link> page for some examples of the materials used in the ImagArena®.
			</p>
					</div>
				</div>

			<br />

				<div className="row" id="graydivabout" >
					<div className="col-md-4 col-md-offset-2">
							<h3><strong>Energetic Framework</strong></h3>
							<p className="text-left">A robust and <strong>flexible game framework</strong> supports the fast pace of each ImagArena® session.<br /><br />The sessions are divided into rounds and each round has different <strong>materials, time limits, and special rules</strong>.  It is a framework that makes sense for participants of all ages, and one that allows the <strong>excitement of imaginative expression</strong> to reach a height that is characteristic of the ImagArena® experience.
			</p>
					</div>
					<div className="col-md-4">
							<img src={require('../images/about_game.png')} className="img-responsive" alt="Responsive image" />
					</div>
				</div>





				<div className="row" id="bio">
						<h1 className="text-center" id="bio-header">Founder <strong>Bio</strong></h1>
					<div className="col-md-6 col-md-offset-1">
							<img src={require('../images/biopic.jpg')} className="img-responsive" id="biopic" alt="Responsive image" />
					</div>
					<div className="col-md-4">
							<p className="text-left">After graduating <strong>Berklee College of Music</strong>, founder Tim Merle began to reflect on his own experiences studying the arts and found that traditional arts programs weren’t keeping pace with the <strong>21st century</strong>.<br /><br />  He set out to design a program that would engage today’s learners through <strong>innovative presentation techniques</strong> and a focus on <strong>imagining</strong> and <strong>creating</strong>. <br /><br />After years of refining the program in <strong>schools across New England</strong>, ImagArena® was founded in 2015 with the goal of awakening the <strong>imaginative abilities of every individual</strong>.<br /><br />When asked how he came up with the idea for the program, he replies, “It’s simply a product of someone with an <strong>art background</strong>, a fascination with <strong>building toys</strong>, and a love for <strong>sci-fi movies and video games</strong>.  I just put all of those interests together and ended up with ImagArena®.”</p>
					</div>
				</div>

				<br />

				<center><p id="copyright"><small>Copyright © 2017 ImagArena®</small></p></center>
			</div>
		</div>
    );
  }
}


export default About;
