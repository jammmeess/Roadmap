import React from "react";
import JourneyOne from "../img/roadmap/journey-begins.jpg";
import JourneyTwo from "../img/roadmap/journey-begins2.jpg";

const Journey = () => {
  return (
    <section className="journey-section" id="Journey">
      <div className="container">
        <div className="row px-5 mx-5">
          <div className="col-lg-12 ms-5 my-5 ">
            <h1>
              <span id="accenture-dark">My Journey</span> Begins
            </h1>
          </div>
          <div className="col-lg-5">
            <img src={JourneyOne} className="journey-one" />
          </div>
          <div className="col-lg-5 mt-5 pt-5 text-light journeyOne-caption">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              sapiente maxime distinctio asperiores iusto harum voluptates,
              magnam odit laboriosam commodi natus ex, deleniti explicabo
              exercitationem?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              vero iure, odio porro expedita debitis dolorum distinctio. Cumque
              possimus ut ipsam aut dolorum, nemo optio.
            </p>
          </div>
          <div className="col-lg-5 text-light ps-3 me-5 journeyOne-caption ">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              sapiente maxime distinctio asperiores iusto harum voluptates,
              magnam odit laboriosam commodi natus ex, deleniti explicabo
              exercitationem?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              vero iure, odio porro expedita debitis dolorum distinctio. Cumque
              possimus ut ipsam aut dolorum, nemo optio.
            </p>
          </div>
          <div className="col-lg-5">
            <img src={JourneyTwo} className="journeyTwo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
