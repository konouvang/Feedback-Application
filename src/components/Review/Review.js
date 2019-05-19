import React, { Component } from 'react';


// Redux dependencies
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { postFeedback, getFeedback } from '../../modules/services/axiosService';

class Review extends Component {

    postNewFeedback(feedbackObject) {
        postFeedback(feedbackObject)
            .then((response) => {
                getFeedback()
                    .then((response) => {
                        this.props.dispatch({
                            type: 'FINAL_ADD_ALL_FEEDBACK',
                            payload: response.data
                        });

                        // navigate to list
                        this.props.history.push('/');
                    })
            });
    }

    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <div>
                   <ul>
                        Feeling: {this.props.reduxState.feedbackReducer.feelingsToAdd}
                   </ul>
                   <ul>
                        Understanding: {this.props.reduxState.feedbackReducer.understandingToAdd}
                   </ul>
                   <ul>
                        Support: {this.props.reduxState.feedbackReducer.supportToAdd}
                   </ul>
                   <ul>
                        Comment: {this.props.reduxState.feedbackReducer.commentsToAdd}
                   </ul>
                   <button onClick={this.postNewFeedback}>SUBMIT</button>
                </div>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Review);