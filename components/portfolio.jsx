import React from 'react';
import Image from 'next/image';

const datas = [{
        name: "Timeline",
        image: "timeline.gif",
        optimised: "timeline-opt.gif",
        technology: "React, Node",
        link: "https://moleculee.herokuapp.com/"
    },
    {
        image: "twaddan.gif",
        optimised: "twaddan.gif",
        technology: "Node, React",
        name: "Twaddan",
        link: "https://twaddan.com/"
    }, {
        image: "western.gif",
        optimised: "western.gif",
        technology: "Next",
        name: "The Western Speaker",
        link: "https://www.thewesternspeaker.com/"
    }, {
        image: "logibids.gif",
        optimised: "logibids-opt.gif",
        technology: "Angular",
        name: "Logibids",
        link: "https://driver.logibids.com"
    }, {
        name: "Flicaf",
        image: "flicaf.gif",
        optimised: "flicaf-opt.gif",
        technology: "React",
        link: "https://flicaf.com"
    }, {
        name: "IMIT Park",
        image: "imit.gif",
        optimised: "imit-opt.gif",
        technology: "Next",
        link: "https://imitpark.co.in"
    }, {
        name: "Anthocyanin",
        image: "anthocyanin.gif",
        optimised: "anthocyanin-opt.gif",
        technology: "React",
        link: "https://anthocyanin.in"
    }, {
        name: "Pranavam Matrimony",
        image: "matrimony.gif",
        optimised: "matrimony-opt.gif",
        technology: "Express",
        link: "http://pranavammatrimony.com"
    }, {
        name: "T-Hands",
        image: "t-hands.gif",
        optimised: "t-hands-opt.gif",
        technology: "Next",
        link: "https://t-hands.org"
    }, {
        name: "My Talent Papa",
        image: "mtp.gif",
        optimised: "mtp-opt.gif",
        technology: "React",
        link: "https://mtp-admin.adityav.in/"
    },{
        name: "Cityway",
        image: "cityway.gif",
        optimised: "cityway-opt.gif",
        technology: "Flutter, Node",
        link: "https://moleculee.herokuapp.com/"
    }, {
        name: "Molecules Enviro Care",
        image: "molecules.gif",
        optimised: "molecules-opt.gif",
        technology: "Express",
        link: "https://moleculee.herokuapp.com/"
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container-fluid p-0">
                <hr/>
                <h2>PORTFOLIO</h2>
                <div className="row mt-5">
                    {datas.map((item) => (
                        <div className="col-md-6 portfolio-item filter-card m-0 p-4" key={item.link}>
                            <div className="portfolio-wrap">
                                <Image
                                    fill={"true"}
                                    src={`/assets/img/portfolio/${item.optimised}`} className="img-fluid" alt=""
                                    height={550}
                                    width={1000}
                                    sizes="(max-width: 768px) 100vw"
                                />
                                {/*<img src={`assets/img/portfolio/${item.optimised}`} className="img-fluid" alt=""/>*/}
                                <div className="portfolio-info">
                                    <h4>{item.name}</h4>
                                    <p>{item.technology}</p>
                                    <div className="portfolio-links">
                                        <a href={`assets/img/portfolio/${item.image}`} target={"_blank"}
                                           data-gall="portfolioGallery" className="venobox" title="Card 1"><i
                                            className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
