import { GET_JOKE, JOKE } from "../actions/types";
const initialState = {
  joke: null,
  jokes: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_JOKE:
      return {
        ...state,
        joke: action.payload,
      };
    case JOKE:
      return {
        ...state,
        jokes: action.payload,
      };
    default:
      return state;
  }
};
