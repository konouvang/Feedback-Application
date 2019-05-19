import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import storeInstance from './modules/store/store';

// Redux
import { Provider } from 'react-redux';



// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
