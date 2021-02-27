import React from 'react';

const datas = [
    {
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
        name: "Molecules Enviro Care",
        image: "molecules.gif",
        optimised: "molecules-opt.gif",
        technology: "Express",
        link: "#"
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container-fluid">
                <div className="row">
                    {datas.map((item) => (
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card m-0 p-0">
                            <div className="portfolio-wrap">
                                <img src={`assets/img/portfolio/${item.optimised}`} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>{item.name}</h4>
                                    <p>{item.technology}</p>
                                    <div className="portfolio-links">
                                        <a href={`assets/img/portfolio/${item.image}`}
                                           data-gall="portfolioGallery" className="venobox" title="Card 1"><i
                                            className="bx bx-plus"></i></a>
                                        <a href={item.link} data-gall="portfolioDetailsGallery"
                                           data-vbtype="iframe" className="venobox" title="Portfolio Details"><i
                                            className="bx bx-link"></i></a>
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
