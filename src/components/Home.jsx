import  React from "react";

import Navbar from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";
import Journey from "./Journey";
import Accenture from "./Accenture";
import Friends from "./Friends";
import SecondHome from "./SecondHome";

const Home = () => {
    return (
        <section>
            <div>
                <Navbar />
            </div>
            <main>
                <Welcome/>
                <About />
                <Journey />
                <Accenture />
                <Friends />
                <SecondHome />
            </main>
        </section>
    );
};

export default Home;