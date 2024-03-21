import React from "react";
import HeroBanner from "../img/herobanner.jpg";

const Welcome = () => {
  return (
    <section id="Welcome" className="hero-section">
      <div className="container">
        <div className="hero-image col-lg-12 d-flex justify-content-end">
          <img src={HeroBanner} />
        </div>

        <div className="hero-text text-start overlay">
          <h1 className="fw-bolder display-1 hero-title">Hey There,</h1>
          <h1 className="fw-bolder display-1 hero-title mb-5 higlight">
            Explore <span id="accenture-dark">Accenture PH</span> with me!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
