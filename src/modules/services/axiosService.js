import axios from 'axios';

const getFeedback() {
    axios.get('/feedback')
    .then((response) => {
      console.log('this is axios.get',response.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

const postFeedback() {
    axios.get('/feedback')
    .then((response) => {
      console.log('not doing anything yet but this is axios.post');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  export {
    getFeedback,
    postFeedback,
};