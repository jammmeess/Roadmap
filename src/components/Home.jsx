import  React from "react";

import Navbar from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";
import Journey from "./Journey";

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
            </main>
        </section>
    );
};

export default Home;