import React, { Component } from 'react';


// Redux dependencies
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class Reviews extends Component {

    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <p>
                    Looks like for this one, we have to render the 
                    </br>
                    Feelings: 
                    </br>
                    Understanding:
                    </br>
                    Support:
                    </br>
                    Comments: 
                </p>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Reviews);