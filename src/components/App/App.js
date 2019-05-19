import React, { Component } from 'react';
import axios from 'axios';
import './App.css';




class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      feedbackData: []
    }
  }

  componentDidMount() {
    this.getFeedback();
  }


  getFeedback() {
    axios.get('/feedback')
    .then((response) => {
      this.setState({
        feedbackData : response.data
      });
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        outer
          <div>
          Route exact path="/" component=Feeling />
            <br/>
            Route exact path="/checkout" component=Checkout
          </div>
          Router>
      </div>
    );
  }
}

export default App;
