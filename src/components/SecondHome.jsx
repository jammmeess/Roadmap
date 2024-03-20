import React from "react";
import FamilyOne from "../img/roadmap/second_home.jpg";
import FamilyTwo from "../img/roadmap/second_home2.JPG";
import FamilyThree from "../img/roadmap/second_home3.JPG";

const SecondHome = () => {
  return (
    <section className="secondhome-section" id="SecondHome">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-5 ">
            <h3 className="display-4">
              Accenture <span className="text-light">is my second home!</span>
            </h3>
          </div>
          <div className="col-lg-4 ps-5 ms-5">
            <img src={FamilyThree} className="family-three" />
          </div>
          <div className="col-lg-6 px-5  familythree-caption">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio dolores libero dolor repellendus blanditiis! A odit sed
              temporibus voluptates sequi!
            </p>
          </div>
          <div className="col-lg-6 familyone-caption mt-5 ms-1 ps-5 px-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio dolores libero dolor repellendus blanditiis! A odit sed
              temporibus voluptates sequi!
            </p>
          </div>
          <div className="col-lg-5">
            <img src={FamilyOne} className="family-One ms-5 " />
          </div>
          <div className="col-lg-4 ms-5 me-5">
            <img src={FamilyTwo} className="family-two" />
          </div>
          <div className="col-lg-6  familytwo-caption pt-5 px-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio dolores libero dolor repellendus blanditiis! A odit sed
              temporibus voluptates sequi!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondHome;
