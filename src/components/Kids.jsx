require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import PicBanner from './Subcomponents/PicBanner';
import ProgramHeader from './Subcomponents/ProgramHeader';
import SectionHeader from './Subcomponents/SectionHeader';
import Details from './Subcomponents/Details';
import InfoContainer from './Subcomponents/InfoContainer';
import QuoteCarousel from './Subcomponents/QuoteCarousel';
import FullPicBanner from './Subcomponents/FullPicBanner';


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
					color="red"
					image="kidstext"
				/>

				<FullPicBanner
					title="This is a test"
					text={<p>This is another test of the text component, to see whether or not it is the correct size and <strong>if this will look good when bolded.</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>}
					bannerPic="kid"
				/>

				<SectionHeader
					image="workshoptext"
				/>
				<Details
					imgOne="duration"
					textOne="45 Minute Session"
					imgTwo="groupsize"
					textTwo="20 Participants Max. Per Group"
					imgThree="age"
					textThree="Ages 6 - 12"
				/>
				<InfoContainer
					image="multiweek"
					text={<p>This is a test of <strong>text tommy texty</strong>.</p>}
					cta="Request Booking Info"
				/>

				<SectionHeader
					image="multitext"
				/>
				<Details
					imgOne="calendar"
					textOne="(6) 45 Minute Sessions"
					imgTwo="groupsize"
					textTwo="20 Participants Max. Per Group"
					imgThree="age"
					textThree="Ages 6 - 12"
				/>
				<InfoContainer
					image="multiweek"
					text={<p>This is a test of <strong>text tommy texty</strong>.</p>}
					cta="Request Booking Info"
				/>

				<SectionHeader
					image="birthdaytext"
				/>
				<Details
					imgOne="duration"
					textOne="45 Minute Session"
					imgTwo="groupsize"
					textTwo="20 Participants Max. Per Group"
					imgThree="age"
					textThree="Ages 6 - 12"
				/>
				<InfoContainer
					image="multiweek"
					text={<p>This is a test of <strong>text tommy texty</strong>.</p>}
					cta="Request Workshop Info"
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
