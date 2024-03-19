import  React from "react";

import Navbar from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";
import Journey from "./Journey";
import Accenture from "./Accenture";
import Friends from "./Friends";

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
            </main>
        </section>
    );
};

export default Home;