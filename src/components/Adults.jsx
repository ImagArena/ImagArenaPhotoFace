require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import PicBanner from './Subcomponents/PicBanner';
import ProgramHeader from './Subcomponents/ProgramHeader';
import SectionHeader from './Subcomponents/SectionHeader';
import Details from './Subcomponents/Details';
import InfoContainer from './Subcomponents/InfoContainer';
import QuoteCarousel from './Subcomponents/QuoteCarousel';


class Home extends React.Component {

	constructor() {
		super();
	}

	componentDidMount = () => {
		$(document).ready(function () {
			$('.question').click(function () {
				$(this).toggleClass('open');
			})
		})
	}

	render = () => {
		return (
			<div>

				<ProgramHeader
					color="green"
					image="adultstext"
				/>

				<PicBanner
					title="Tikka Test Tuesday Tom"
					text={<p>This is a test of <strong>text tommy texty</strong>.</p>}
					image="massachusetts"
				/>

				<Details
					imgOne="duration"
					textOne="45 Minute Session"
					imgTwo="groupsize"
					textTwo="60 Participants Max. Per Group"
					imgThree="plugplay"
					textThree="EZ Setup"
				/>
				<InfoContainer
					image="multiweek"
					text={<p>This is a test of <strong>text tommy texty</strong>.</p>}
					cta="Request Workshop Booking Info"
				/>

				<QuoteCarousel
					quoteOne="ImagArena is a flavor-burst of education, and its impact is far-reaching, going well beyond art instruction.
					It energizes students and inspires teachers, each of which has immense value in itself. If you’re looking for a unique arts program to integrate into your classroom or school-site, I highly recommend ImagArena."
					personOne="- Justin Hajj Head 6th Grade Teacher / The Learning Project Elementary School / Boston, MA"
					quoteTwo="The quick pace captured the children’s attention and kept them involved for the duration of the program.
					The materials were attractive, appealing and designed to give the children a full
					sensory experience.  We highly recommend the Imagarena program for schools looking for an
					alternative way to incorporate a fun and challenging component to their
					Curriculum."
					personTwo="- Paula Cuneo Lead Teacher / Christian Family Montessori School / Holliston, MA"
					quoteThree="The ImagArena interactive program prompted the participants to develop critical thinking and problem solving skills while having rousing good time learning!
					The MGH Youth Zone staff wholeheartedly recommends ImagArena to any school or organization that is looking for a professional, lively presentation."
					personThree="- Leslie Heffron, RN, BSN, MEd. Director / MGH Revere Youth Zone / Revere, MA"
				/>

			</div >
		);
	}
}

export default Home;
