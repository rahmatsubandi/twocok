import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";

import "../index.css";
import { getJoke, jokeLain } from "../actions/jokeActions";

const Joke = (props) => {
  const { joke, jokes, getJoke, jokeLain } = props;
  useEffect(() => {
    if (joke.joke !== null) {
      console.log(joke.joke.joke);
    }
    if (jokes.jokes !== null) {
      // console.log(jokes.jokes);
    }
  }, [joke, jokes]);
  return (
    <Fragment>
      <br />
      <div className="col">
        <div className="col-auto">
          <div
            className="alert alert-dark alert-dismissible fade show text-center"
            role="alert"
          >
            <strong>Welcome</strong> Meme Lovers!
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
      {/* Jokes */}
      <div className="container joke">
        <div className="row">
          <div className="col-6 col-sm-6 pt-5">
            <div className="card mb-5">
              <div className="card-body">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => getJoke()}
                >
                  Read Joke
                </button>
                <h5 className="card-title text-danger">
                  Category : {joke.joke !== null && joke.joke.category}
                </h5>
                <h6 className="card-subtitle mb-2 font-weight-bold">
                  {joke.joke !== null && joke.joke.setup}
                </h6>
                <h6 className="card-text font-italic font-weight-normal">
                  {joke.joke !== null && joke.joke.delivery}
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 pt-5">
            <div className="card mb-5">
              <div className="card-body">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => jokeLain()}
                >
                  Read Other Joke
                </button>
                <h5 className="card-title text-danger">
                  Category : {jokes.jokes !== null && jokes.jokes.type}
                </h5>
                <h6 className="card-subtitle mb-2 font-weight-bold">
                  {jokes.jokes !== null && jokes.jokes.setup}
                </h6>
                <h6 className="card-text font-italic font-weight-normal">
                  {jokes.jokes !== null && jokes.jokes.punchline}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  joke: state.joke,
  jokes: state.jokes,
});
export default connect(mapStateToProps, {
  getJoke,
  jokeLain,
})(Joke);
