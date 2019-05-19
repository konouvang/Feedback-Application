import React, { Component } from 'react';


// Redux dependencies
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class Comments extends Component {

    render() {
        return (
            <div>
                <h2>Feelings</h2>
                <p>
                    I need an Input field Comments text, limit 1 to 5 and a button
                </p>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Comments);