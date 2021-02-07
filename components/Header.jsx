import React from 'react';

const Header = () => {
    return (
        <>
            <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

            {/*<header id="header" class="d-flex flex-column justify-content-center">*/}

            {/*    <nav className="nav-menu">*/}
            {/*        <ul>*/}
            {/*            <li className="active"><a href="#hero"><i className="bx bx-home"></i> <span>Home</span></a></li>*/}
            {/*            <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>*/}
            {/*            <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>*/}
            {/*            <li><a href="#portfolio"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>*/}
            {/*            <li><a href="#services"><i className=˚bx bx-server"></i> <span>Services</span></a></li>*/}
            {/*            <li><a href="#contact"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>*/}
            {/*        </ul>*/}
            {/*    </nav>*/}

            {/*</header>*/}

            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" >
                    <h1>Aditya V</h1>
                    <p>Full Stack in <span className="typed" data-typed-items="MERN, MEAN, Javascript"/></p>
                    <div className="social-links">
                        <a href="https://github.com/adityacrypstal" className="twitter"><i className='bx bxl-github'></i></a>
                        <a href="https://www.instagram.com/adityaaadhii/" className="facebook"><i className='bx bxl-instagram'></i></a>
                        <a href='https://wa.me/9567682232/?text="Hi%20Aditya"' className="instagram"><i className='bx bxl-whatsapp'></i></a>
                        <a href="skype:live:adityavadityav?chat" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="https://linkedin.com/aditya-v"><i className="bx bxl-linkedin"></i></a>
                    </div>


                </div>
            </section></>
    );
};

export default Header;
