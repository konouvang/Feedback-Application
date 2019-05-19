import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { withRouter } from 'react-router-dom';

class Understanding extends Component {

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <p>
                Feeling?
                </p>
            input onChange=this.handleFieldChange type="number" min="1" max="5"
            </div>
        )
    }
}

export default withRouter(connect(mapReduxStateToProps)(Understanding));