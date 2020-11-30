require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ProgramHeader from './Subcomponents/ProgramHeader';


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
      <div className="index">
        <div>
          {/* Top Banner */}

          <ProgramHeader
            color="gray"
            image="faq"
          />

          <div className="faq-container">

            {/* FAQ Component */}
            <h4 className="question">
              <span className="arrow"><i className="fa fa-chevron-right"></i></span>&nbsp;
              What’s the cost?
                </h4>
            <p className="answer">The cost of the program depends on group size and the number of groups.  <a href="mailto:contact@imagarena.com?subject=ImagArena Booking Request" target="_blank">Contact us</a> to get an exact quote for your organization.

                </p>
            {/* END FAQ Component */}

            {/* FAQ Component */}
            <h4 className="question">
              <span className="arrow"><i className="fa fa-chevron-right"></i></span>&nbsp;
              What if my organization would like to run a program with more than 20 participants?
                </h4>
            <p className="answer">For groups larger than 20 we commonly do back-to-back sessions, so for example having one group of 20 run from 3:30-4:15 and another group for 20  from 4:15-5:00.
                </p>
            {/* END FAQ Component */}

            {/* FAQ Componen */}
            <h4 className="question">
              <span className="arrow"><i className="fa fa-chevron-right"></i></span>&nbsp;
              Does ImagArena require a room with a projector, smartboard or TV?
                </h4>
            <p className="answer">While a room with a projector, smartboard, or TV is highly preferred, each instructor is equipped with a portable projector for situations where securing a room with a display is difficult.
                </p>
            {/* END FAQ Component */}

            {/* FAQ Componen */}
            <h4 className="question">
              <span className="arrow"><i className="fa fa-chevron-right"></i></span>&nbsp;
              Can the multi-week program run for longer than 6 weeks?
                </h4>
            <p className="answer">While 6 weeks is the preferred length, in certain cases the multi-week program can be extended to 7 or 8 weeks if that fits best within your organization's standard programming calendar.
                </p>
            {/* END FAQ Component */}

            {/* FAQ Componen */}
            <h4 className="question">
              <span className="arrow"><i className="fa fa-chevron-right"></i></span>&nbsp;
              Can the multi-week program run for shorter than 6 weeks?
                </h4>
            <p className="answer">Because of vacation days and holiday breaks, sometimes the calendar doesn’t allow for a full 6 week program.  If this is the case a custom 3, 4, or 5 week program can be implemented.
                </p>
            {/* END FAQ Component */}

            {/* FAQ Componen */}
            <h4 className="question">
              <span className="arrow"><i className="fa fa-chevron-right"></i></span>&nbsp;
              What age groups can participate in ImagArena?
                </h4>
            <p className="answer">The suggested ages are 6-12, or grades 1-8.  However if combined in a program with older students, groups of kindergarten age are also fine to participate.
                </p>
            {/* END FAQ Component */}

            {/* FAQ Componen */}
            <h4 className="question">
              <span className="arrow"><i className="fa fa-chevron-right"></i></span>&nbsp;
              Does our organization need to supply any materials?
                </h4>
            <p className="answer">We provide all of the materials for each session.  A room with a projector, smartboard, or TV is preferred but not required.
                </p>
            {/* END FAQ Component */}

            {/* FAQ Componen */}
            <h4 className="question">
              <span className="arrow"><i className="fa fa-chevron-right"></i></span>&nbsp;
              How long are the sessions?
                </h4>
            <p className="answer">With the exception of the 30 minute Workshop, all ImagArena sessions run approximately 45-50 minutes.
                </p>
            {/* END FAQ Component */}

            {/* FAQ Componen */}
            <h4 className="question">
              <span className="arrow"><i className="fa fa-chevron-right"></i></span>&nbsp;
              Can the programs be mixed age groups?
                </h4>
            <p className="answer">We encourage mixed age groups for all of our programs.
                </p>
            {/* END FAQ Component */}

            {/* FAQ Componen */}
            <h4 className="question">
              <span className="arrow"><i className="fa fa-chevron-right"></i></span>&nbsp;
              Can the programs be mixed age groups?
                </h4>
            <p className="answer">We encourage mixed age groups for all of our programs.
                </p>
            {/* END FAQ Component */}

            {/* FAQ Componen */}
            <h4 className="question">
              <span className="arrow"><i className="fa fa-chevron-right"></i></span>&nbsp;
              Can the programs be mixed age groups?
                </h4>
            <p className="answer">We encourage mixed age groups for all of our programs.
                </p>
            {/* END FAQ Component */}

            {/* FAQ Componen */}
            <h4 className="question">
              <span className="arrow"><i className="fa fa-chevron-right"></i></span>&nbsp;
              Can the programs be mixed age groups?
                </h4>
            <p className="answer">We encourage mixed age groups for all of our programs.
                </p>
            {/* END FAQ Component */}

            {/* FAQ Componen */}
            <h4 className="question">
              <span className="arrow"><i className="fa fa-chevron-right"></i></span>&nbsp;
              Can the programs be mixed age groups?
                </h4>
            <p className="answer">We encourage mixed age groups for all of our programs.
                </p>
            {/* END FAQ Component */}

            {/* FAQ Componen */}
            <h4 className="question">
              <span className="arrow"><i className="fa fa-chevron-right"></i></span>&nbsp;
              Can the programs be mixed age groups?
                </h4>
            <p className="answer">We encourage mixed age groups for all of our programs.
                </p>
            {/* END FAQ Component */}

            {/* FAQ Componen */}
            <h4 className="question">
              <span className="arrow"><i className="fa fa-chevron-right"></i></span>&nbsp;
              Can the programs be mixed age groups?
                </h4>
            <p className="answer">We encourage mixed age groups for all of our programs.
                </p>
            {/* END FAQ Component */}

          </div>
        </div>
      </div>
    );
  }
}




export default Home;
