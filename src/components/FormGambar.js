import React from "react";

import logo from "../simbol.svg";

export default function FormGambar() {
  return (
    <>
      <img
        src={logo}
        style={{ height: 236 }}
        className="img-fluid"
        alt="logo"
      />
    </>
  );
}
