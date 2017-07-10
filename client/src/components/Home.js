require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


class Home extends React.Component {

	constructor() {
		super();
	}

  render = () => {
    return (
			<div className="index">
				<div className="container-fluid">
					<div className="col-md-8 col-md-offset-2">
						<div id="home-video" className="videoWrapper">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/9yvGqvQjs7s" frameborder="0" allowfullscreen></iframe>
						</div>

					</div>
				</div>

	      <div >
					<h2 className="main-header" id="hometext">ImagArena® is a <strong>building workshop</strong> for <strong>ages 6+</strong>, designed to awaken the imaginative abilities of <strong>every individual</strong>.</h2>
				</div>

				<div className="row programselect">
					<div className="col-lg-2 col-sm-4 col-lg-offset-3">

								<p className="quote"><em>"ImagArena® is a flavor-burst of education, and its impact is far-reaching, going well beyond art instruction. It energizes students and inspires teachers, each of which has immense value in itself."</em>
								<br /><br /><small>Justin Hajj / Head 6th Grade Teacher / The Learning Project Elementary School / Boston, MA</small></p>

					</div>
					<div className="col-lg-2 col-sm-4">

								<p className="quote"><em>"ImagArena® interactive program prompted the participants to develop critical thinking and problem solving skills while having a rousing good time learning!  The MGH Youth Zone staff wholeheartedly recommends ImagArena® to any school or organization that is looking for a professional, lively presentation."</em>
								<br /><br /><small>Leslie Heffron, RN, BSN, Med. / Program Director / Massachusetts General Hospital Youth Zone / Boston, MA</small></p>

					</div>
					<div className="col-lg-2 col-sm-4">

								<p className="quote"><em>"The materials were attractive, appealing and designed to give the participants a full sensory experience. We highly recommend the ImagArena® program for organizations looking for an alternative way to incorporate a fun and challenging component to their curriculum."</em>
								<br /><br /><small>Paula Cuneo / Lead Teacher / Christian Family Montesorri School / Holliston, MA</small></p>

					</div>
				</div>


			</div>
    );
  }
}




export default Home;
