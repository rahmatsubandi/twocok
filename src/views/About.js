import React from "react";
import FormGambar from "../components/FormGambar";

export default function About() {
  return (
    <div className="container">
      <div className="row mb-5 pt-5">
        <div className="col-md-9 col-lg-6 mb-4 pt-3">
          <FormGambar />
        </div>
        <div
          className="col-md-auto col-lg-6 mb-4 pt-3"
          style={{ userSelect: "none" }}
        >
          <p className="text-justify lead font-italic">
            2COK was founded on Today, precisely on July 10, 2020. 2COK is also
            a parody of 1CAK. But in that respect I apologize to 1CAK.
          </p>
          <p className="text-justify lead">
            2COK is made with all my heart, for the entertainment of meme
            lovers. Of course this website still has a lot of shortcomings, so I
            as the owner of 2COK will always update this Website with all my
            heart, soul, and abilities. So that this website is much in demand
            by the Meme Indonesia Lovers. In the future we will update memes
            with images. And continue to expand until 'Fly to moon'.
          </p>
          <p className="blockquote font-italic font-weight-light">
            "Expand Laughter, Stop Drugs"
          </p>
          <blockquote className="blockquote">
            <p>Best Regards,</p>
            <p className="blockquote-footer">
              Handcrafed full <span className="text-danger">❤</span> by
              <cite title="Source Title"> Rahmat Subandi</cite>
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
