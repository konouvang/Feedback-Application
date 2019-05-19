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
        console.log(this.props.reduxState.feedbackReducer);
        postFeedback(this.props.reduxState.feedbackReducer);
        this.props.history.push('/thankyou');
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
                        Feeling: {this.props.reduxState.feedbackReducer.feeling}
                   </ul>
                   <ul>
                        Understanding: {this.props.reduxState.feedbackReducer.understanding}
                   </ul>
                   <ul>
                        Support: {this.props.reduxState.feedbackReducer.support}
                   </ul>
                   <ul>
                        Comment: {this.props.reduxState.feedbackReducer.comments}
                   </ul>
                   <button onClick={this.addFeedBackToDatabase}>SUBMIT</button>
                </div>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Review);