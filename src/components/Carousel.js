import React from "react";

import logo from "../simbol.svg";

export default function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="container">
          <div className="carousel-item active">
            <div className="row pt-5 justify-content-center">
              <div className="col-9 col-sm-4 col-md-6 col-lg-5">
                <h1 className="mb-4">#justathome</h1>
                <p className="mb-4">While reading Memee</p>
                <button className="btn btn-outline-light">Read Now !</button>
              </div>
              <div className="col-3 col-sm-6 col-md-4 col-lg-4 d-none d-sm-block offset-2">
                <img
                  src={logo}
                  style={{ height: 236 }}
                  className="img-fluid"
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row pt-5 justify-content-center">
              <div className="col-9 col-sm-4 col-md-6 col-lg-5">
                <h1 className="mb-4">Just For Fun</h1>
                <p className="mb-4">Come on read Meme</p>
                <button className="btn btn-light">Read Now !</button>
              </div>
              <div className="col-3 col-sm-6 col-md-4 col-lg-4 d-none d-sm-block offset-2">
                <img
                  src={logo}
                  style={{ height: 236 }}
                  className="img-fluid"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
