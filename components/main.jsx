import React from 'react';
import About from "./about";
import Facts from "./facts";
import Skills from "./skills";
import Resume from "./resume";
import Portfolio from "./portfolio";
import Services from "./services";
import Contact from "./contact";

const Main = () => {
    return (
        <div>
            <main id="main">

                <About/>
                {/*<Facts/>*/}
                <Skills/>
                <Resume/>
                <Portfolio/>
                {/*<Services/>*/}
                <Contact/>
            </main>
        </div>
    );
};

export default Main;
