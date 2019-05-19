import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { withRouter } from 'react-router-dom';

class Understanding extends Component {

    constructor(props){
        super(props)
        this.state = {
            understanding: '',
        }
    }S

    handleFieldChange = (event) => {
         this.setState({
            
                understanding: event.target.value
        });
    }


    submitUnderstanding = (event) => {
        this.props.dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: this.state.understanding,
        });
        // navigate to the Review page after checkout
        this.props.history.push('/support');
    }


    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <p>
                Understanding?
                </p>
                <input onChange={this.handleFieldChange} type="number" min="1" max="5" />
                <button onClick={this.submitUnderstanding}>NEXT</button>
            
            </div>
        )
    }
}

export default withRouter(connect(mapReduxStateToProps)(Understanding));