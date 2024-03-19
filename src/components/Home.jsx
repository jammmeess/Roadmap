import  React from "react";

import Navbar from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";

const Home = () => {
    return (
        <section>
            <div>
                <Navbar />
            </div>
            <main>
                <Welcome/>
                <About />
            </main>
        </section>
    );
};

export default Home;