
import { FETCH_DATA_SUCCESS, FETCH_CHAR_SUCCESS } from "../actions/types";

export const initialState = {
  data:[],
  chars:[]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload };
    case FETCH_CHAR_SUCCESS:
      return { ...state, chars: action.payload };
    default:
      return state;
  }
}
