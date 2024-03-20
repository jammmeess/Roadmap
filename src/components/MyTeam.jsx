import React from "react";
import MyTeamPhoto from "../img/roadmap/my-team.JPG";

const MyTeam = () => {
  return (
    <section className="myteam-section mb-5" id="MyTeam">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <img src={MyTeamPhoto} className="myteam-photo" />
          </div>
          <div className="col-lg-12 px-5 mx-1 my-team-section">
            <h3 className="display-6">
              The <span id="accenture">Finance Business Management</span> Team
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              veritatis nemo similique enim voluptatum iste eveniet, quia
              asperiores eaque? Molestiae quas fuga id illo, commodi dicta
              perferendis quisquam dignissimos mollitia enim doloremque
              voluptatem. Officia tempore totam dolores reprehenderit nisi magni
              architecto harum ducimus, eius dolore qui autem, error dolor ad.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              veritatis nemo similique enim voluptatum iste eveniet, quia
              asperiores eaque? Molestiae quas fuga id illo, commodi dicta
              perferendis quisquam dignissimos mollitia enim doloremque
              voluptatem. Officia tempore totam dolores reprehenderit nisi magni
              architecto harum ducimus, eius dolore qui autem, error dolor ad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyTeam;
