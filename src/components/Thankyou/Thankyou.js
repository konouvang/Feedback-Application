import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { withRouter } from 'react-router-dom';

class Thankyou extends Component {

    constructor(props){
        super(props)
        this.state = {
            feeling: '',
        }
    }

    submitEvent = (event) => {
        this.props.dispatch({
            type: 'ADD_FEELING',
            payload: this.state.feeling,
        });
        // navigate to the Review page after checkout
        this.props.history.push('/');
    }

    

    render() {
        return (
            <div>
                <h1>Thank you!</h1>
            <button onClick={this.submitEvent}>Leave New Feedback</button>
            </div>
        )
    }
}

export default withRouter(connect(mapReduxStateToProps)(Thankyou));