import React, { Component } from 'react';


// Redux dependencies
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class Support extends Component {
    constructor(props){
        super(props)
        this.state = {
            supportToAdd: '',
        }
    }S

    handleFieldChange = (event) => {
         this.setState({
            
                supportToAdd: event.target.value
        });
    }


    submitSupport = (event) => {
        this.props.dispatch({
            type: 'ADD_SUPPORT',
            payload: this.state.supportToAdd,
        });
        // navigate to the Review page after checkout
        this.props.history.push('/comments');
    }


    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <p>
                Support?
                </p>
                <input onChange={this.handleFieldChange} type="number" min="1" max="5" />
                <button onClick={this.submitSupport}>NEXT</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Support);