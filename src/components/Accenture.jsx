import React from "react";

import AccenturePhoto from "../img/roadmap/accenturephilippines.jpg";

const Accenture = () => {
  return (
    <section className="accenture-section" id="Accenture">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ms-5 ">
            <img src={AccenturePhoto} className="accenture-photo" />
          </div>
          <div className="col-lg-12 ms-5 pe-5  accenture-caption">
            <h3 className="display-5">
              My First Day in <span id="accenture">Accenture</span>
            </h3>
            <p className="pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              laboriosam esse placeat temporibus cumque voluptatem ex ratione
              cupiditate ea corrupti, veritatis repellat omnis quia sed officiis
              culpa facilis voluptatum, praesentium quibusdam eveniet facere
              obcaecati aliquam. Exercitationem, obcaecati, modi explicabo
              dolorum quas aliquam aperiam, delectus at quis fugiat officiis sed
              sequi.
            </p>
            <p className="pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              laboriosam esse placeat temporibus cumque voluptatem ex ratione
              cupiditate ea corrupti, veritatis repellat omnis quia sed officiis
              culpa facilis voluptatum, praesentium quibusdam eveniet facere
              obcaecati aliquam. Exercitationem, obcaecati, modi explicabo
              dolorum quas aliquam aperiam, delectus at quis fugiat officiis sed
              sequi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Accenture;
