import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';




class App extends Component {



  componentDidMount() {
    // this.getFeedback();
    // this.postFeedback();
  }


  // getFeedback() {
  //   axios.get('/feedback')
  //   .then((response) => {
  //     console.log('this is axios.get',response.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  // postFeedback() {
  //   axios.get('/feedback')
  //   .then((response) => {
  //     console.log('not doing anything yet but this is axios.post');
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback Form</h1>
         </header> 
         <br/>
         <Route exact path="/" component={Feeling} />
         <Route exact path="/understanding" component={Understanding} />
         <Route exact path="/support" component={Support} />
         <Route exact path="/comments" component={Comments} />
         <Route exact path="/review" component={Review} />
        </div> 
     </Router>
      
    );
  }
}

export default App;
