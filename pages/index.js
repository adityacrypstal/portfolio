import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import Main from "../components/main";
import Header from "../components/Header";


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title> ADITYA || Full Stack Developer</title>
                <meta content="React || Node || Angular || Next || Javascript || Python || AWS || Mongo || SQL"
                      name="description"/>
                <meta
                    content="freelance, developer, kerala, websites, javascript, node, react, performance, javascript, js, crpsyal, india"
                    name="keywords"/>
                <meta name="robots" content="index, follow"/>
                <meta property="og:title" content="ADITYA || Full Stack Developer"/>
                <meta property="og:description" content="React | Node | Angular | Next | Javascript | Python | AWS | Mongo | SQL"/>
                <meta property="og:image" content="https://drive.google.com/file/d/1CWgPRbJeLD8RXJqgDRlMRh-IAMytD2Fe/preview"/>
                <meta property="og:url" content="http://adityav.in"/>
                <link href="./favicon.ico" rel="icon"/>
                <link href="./assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                    rel="stylesheet"/>

                <link href="./assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="./assets/vendor/icofont/icofont.min.css" rel="stylesheet"/>
                <link href="./assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
                <link href="./assets/vendor/venobox/venobox.css" rel="stylesheet"/>
                <link href="./assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet"/>
                <link href="./assets/vendor/aos/aos.css" rel="stylesheet"/>


            </Head>
            <Header/>
            <script src="./assets/vendor/jquery/jquery.min.js"/>
            <script src="./assets/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
            <script src="./assets/vendor/jquery.easing/jquery.easing.min.js"/>
            <script src="./assets/vendor/php-email-form/validate.js"/>
            <script src="./assets/vendor/waypoints/jquery.waypoints.min.js"/>
            <script src="./assets/vendor/counterup/counterup.min.js"/>
            <script src="./assets/vendor/isotope-layout/isotope.pkgd.min.js"/>
            <script src="./assets/vendor/venobox/venobox.min.js"/>
            <script src="./assets/vendor/owl.carousel/owl.carousel.min.js"/>
            <script src="./assets/vendor/typed.js/typed.min.js"/>
            <script src="./assets/js/main.js"/>

            {/*<Main/>*/}
            <a href="#" className="back-to-top"><i className="bx bx-up-arrow-alt"></i></a>
            <div id="preloader"></div>
        </div>
    )
}
