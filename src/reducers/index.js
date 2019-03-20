
import { FETCH_DATA_SUCCESS } from "../actions/types";

 export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

