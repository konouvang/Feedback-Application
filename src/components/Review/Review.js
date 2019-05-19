import React, { Component } from 'react';


// Redux dependencies
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { postFeedback, getFeedback } from '../../modules/services/axiosService';
import storeInstance from '../../modules/store/store';

class Review extends Component {
    constructor(props){
        super(props)
        this.state = {
            feedbackObject: {},
        }
    }


    addFeedBackToDatabase =(event) => {
        postFeedback(this.props.reduxState.feedbackReducer);
        }

    // postNewFeedback(feedbackObject) {
    //     postFeedback(feedbackObject)
    //         .then((response) => {
    //             getFeedback()
    //                 .then((response) => {
    //                     this.props.dispatch({
    //                         type: 'FINAL_ADD_ALL_FEEDBACK_TO_REVIEW',
    //                         payload: response.data
    //                     });
    //                     console.log(response.data);

    //                     // navigate to list
    //                     this.props.history.push('/');
    //                 })
    //         });
    // }

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
                   <button onClick={this.addFeedBackToDatabase}>SUBMIT</button>
                </div>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Review);