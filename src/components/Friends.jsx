import React from "react";
import FriendsOne from "../img/roadmap/friends1.jpg";
import FriendsTwo from "../img/roadmap/friends6.JPG";

const Friends = () => {
  return (
    <section className="friends-section" id="Friends">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="display-6">
              "Having <span id="accenture">Friends </span>at work makes the day
              go faster and the workload feel{" "}
              <span id="accenture">lighter</span>."
            </h3>
            <p>- Anonymous Author</p>
          </div>
          <div className="col-lg-6">
            <img src={FriendsTwo} className="friendsOne" />
          </div>
          <div className="col-lg-6">
            <img src={FriendsOne} className="friendsOne" />
          </div>
          <div className="col-lg-12 pe-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos
              ipsum corporis. Quis, architecto! Maiores temporibus fugit quaerat
              illo ratione debitis, voluptatibus, repellendus reprehenderit
              minus corrupti totam itaque. Sit suscipit non laudantium harum
              distinctio dicta optio nobis rerum doloremque facilis, dignissimos
              ipsum quos ratione et aliquid unde? Beatae, expedita amet!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos
              ipsum corporis. Quis, architecto! Maiores temporibus fugit quaerat
              illo ratione debitis, voluptatibus, repellendus reprehenderit
              minus corrupti totam itaque. Sit suscipit non laudantium harum
              distinctio dicta optio nobis rerum doloremque facilis, dignissimos
              ipsum quos ratione et aliquid unde? Beatae, expedita amet!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Friends;
