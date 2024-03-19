import  React from "react";

import Navbar from "./Navbar";
import Welcome from "./Welcome";

const Home = () => {
    return (
        <section>
            <div>
                <Navbar />
            </div>
            <main>
                <Welcome/>
            </main>
        </section>
    );
};

export default Home;