import { combineReducers } from "redux";
import jokeReducer from "./jokeReducers";

export default combineReducers({
  joke: jokeReducer,
  jokes: jokeReducer,
});
