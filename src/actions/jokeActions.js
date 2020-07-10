import { GET_JOKE, JOKE } from "./types";

export const getJoke = () => async (dispatch, getState) => {
  try {
    const res = await fetch("https://sv443.net/jokeapi/v2/joke/Any");
    const data = await res.json();
    // console.log(data);
    dispatch({ type: GET_JOKE, payload: data });
  } catch (error) {
    console.error("error");
  }
};
export const jokeLain = () => async (dispatch, getState) => {
  try {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await res.json();
    // console.log(data);
    dispatch({ type: JOKE, payload: data });
  } catch (error) {
    console.error("error");
  }
};
