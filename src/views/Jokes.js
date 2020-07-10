import React from "react";
import Joke from "../components/Joke";
import { Provider } from "react-redux";
import store from "../store";
function Jokes() {
  return (
    <Provider store={store}>
      <Joke />
    </Provider>
  );
}

export default Jokes;
