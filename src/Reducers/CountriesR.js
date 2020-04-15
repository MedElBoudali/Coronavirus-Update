import {
  GET_COUNTRIES,
  SET_CURRENT,
  GET_HiSTORY_CURRENT,
  SET_LOADING,
  COUNTRIES_ERROR
} from '../Actions/Types';

const initialState = {
  allCountries: null,
  currentCountry: null,
  currentHistory: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, allCountries: action.payload, loading: false };

    case SET_CURRENT:
      return { ...state, currentCountry: action.payload, loading: false };

    case GET_HiSTORY_CURRENT:
      return { ...state, currentHistory: action.payload, loading: false };

    case SET_LOADING:
      return { ...state, loading: true };

    case COUNTRIES_ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
