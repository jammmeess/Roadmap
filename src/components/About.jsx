import React from "react";

import  Profile from "../img/profile.jpg"

const About = () => {
    return (
      <section className="about-section" id="About">
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-lg-6">
              <img src={Profile} className="profile" />
            </div>
            <div className="col-lg-5 text-dark intro-section ms-3">
              <p className="display-3"> Hey Everyone!</p>
              <p className="display-6">
                My Name is <i><bold>Marian Rae Royandoyan,</bold></i>
              </p>
              <p>
                I've been crunching numbers as an accountant for six years now,
                but there's more to me than just balancing books. When I'm not
                at the office, you'll find me exploring new destinations with my
                fiancée, indulging in delicious food finds, or curled up with a
                good book or TV series. Oh, and I'm also a proud cat lover!
                
              </p>
              <p>Transitioning to Accenture was a bit of a shift from my previous
                role, but I'm really enjoying the journey. In the past six
                months, I've learned a ton from my colleagues and gained
                valuable experience that I'm excited to build on. I'm really looking
                forward to what's ahead!</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;


