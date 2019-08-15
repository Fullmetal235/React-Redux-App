import {
  FETCH_Ghibli_DATA_START,
  FETCH_Ghibli_DATA_SUCCESS,
  FETCH_Ghibli_DATA_FAILURE
} from '../actions';

const initialState = {
  Ghibli: [],
  isLoading: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_Ghibli_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case FETCH_Ghibli_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Ghibli: action.payload,
        error: ''
      };
    default:
      return state;
  }
};