import React, { Component } from 'react';


// Redux dependencies
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class Review extends Component {

    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <p>
                   
                </p>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Review);