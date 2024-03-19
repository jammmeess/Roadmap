import React from "react";

import PartyOne from "../img/roadmap/party1.jpg";
import PartyTwo from "../img/roadmap/party2.JPG";

const Party = () => {
    return (
      <section className="party-section" id="Party">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={PartyOne} className="party-one"></img>
            </div>
            <div className="col-lg-5 partyone-caption">
              <h3 className="display-6">
                Let's get this <span id="accenture">Party</span> Started!
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                eos ipsum corporis. Quis, architecto! Maiores temporibus fugit
                quaerat illo ratione debitis, voluptatibus, repellendus
                reprehenderit minus corrupti totam itaque.
              </p>
            </div>
            <div className="col-lg-5 partytwo-caption me-5">
              <h4 className="mb-3">
                Meet my <span id="accenture">P.E.P.</span> Team
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                eos ipsum corporis. Quis, architecto! Maiores temporibus fugit
                quaerat illo ratione debitis, voluptatibus, repellendus
                reprehenderit minus corrupti totam itaque.
              </p>
            </div>
            <div className="col-lg-6">
              <img src={PartyTwo} className="party-two"></img>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Party;