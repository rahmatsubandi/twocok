import React from "react";

import "./style.scss";
import { Link } from "react-router-dom";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";

import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="App">
      <Carousel />
      <div className="container">
        <br />
        <div className="row text-right">
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4 pt-3">
            <div className="card">
              <img className="card-img-top hero" src={banner1} alt="banner" />
              <div className="card-body ">
                <Link className="btn btn-outline-dark" to="/jokes">
                  Read Jokes
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4 pt-3">
            <div className="card">
              <img className="card-img-top hero" src={banner2} alt="banner" />
              <div className="card-body ">
                <Link className="btn btn-outline-dark" to="/jokes">
                  Read Jokes
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4 pt-3">
            <div className="card">
              <img className="card-img-top hero" src={banner3} alt="banner" />
              <div className="card-body ">
                <Link className="btn btn-outline-dark" to="/jokes">
                  Read Jokes
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4 pt-3">
            <div className="card">
              <img className="card-img-top hero" src={banner4} alt="banner" />
              <div className="card-body ">
                <Link className="btn btn-outline-dark" to="/jokes">
                  Read Jokes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
