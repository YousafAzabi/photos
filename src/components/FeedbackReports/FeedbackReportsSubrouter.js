import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import '../ModeratorPage.scss';
import FeedbackReportsPage from "./FeedbackReportsPage";
import FeedbackDetailsPage from "./FeedbackDetailsPage";

class FeedbackReportsSubrouter extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {

    // TODO: deleteme
    console.log(this.props);

    // debugger;


    return (
      <div>

        <Route exact path={this.props.config.PAGES.feedbackReports.path} render={(props) =>
          <FeedbackReportsPage {...props}
                               {...this.props}
          />}
        />

        <Route path={`${this.props.config.PAGES.feedbackReports.path}/:id`} render={(props) =>
          <FeedbackDetailsPage {...this.props} {...props}

          />}
        />

      </div>
    );
  }
}

export default FeedbackReportsSubrouter;
