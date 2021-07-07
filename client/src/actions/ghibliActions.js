import axios from 'axios';

export const FETCH_Ghibli_DATA_START = 'FETCH_Ghibli_DATA_START';
export const FETCH_Ghibli_DATA_SUCCESS = 'FETCH_Ghibli_DATA_SUCCESS';
export const FETCH_Ghibli_DATA_FAILURE = 'FETCH_Ghibli_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_Ghibli_DATA_START });
    axios
      .get('https://ghibliapi.herokuapp.com/films')
      .then(res => {
        // res.data.data
        console.log(res);
        dispatch({ type: FETCH_Ghibli_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_Ghibli_DATA_FAILURE, payload: err.response });
        console.log(err);
      });
  };
};
