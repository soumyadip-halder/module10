import {FETCH_SUCCESSFUL, FETCH_ALL, FETCH_ERROR} from './constant';

const initState = {
  loading: false,
  data: [],
  error: '',
};

const allFatReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESSFUL:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default allFatReducer;
