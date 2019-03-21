
import { FETCH_DATA_SUCCESS } from "../actions/types";

export const initialState = {
  data:[]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
