
import { FETCH_DATA_SUCCESS, FETCH_CHAR_SUCCESS } from "../actions/types";

export const initialState = {
  movies:[],
  chars:[],
  isChildPage:false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, movies: action.payload };
    case FETCH_CHAR_SUCCESS:
      return { ...state, chars: action.payload, isChildPage: !action.isChildPage };
    default:
      return state;
  }
}
