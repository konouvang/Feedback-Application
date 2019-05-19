import React, { Component } from 'react';


// Redux dependencies
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class Support extends Component {

    render() {
        return (
            <div>
                <h2>Feelings</h2>
                <p>
                    I need an Input field numbers, limit 1 to 5 and a button
                </p>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Support);