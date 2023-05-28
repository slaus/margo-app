import React from 'react';
import {Link} from "react-scroll";

import Tilt from "react-parallax-tilt";
import {Animate} from "../animation";
import {AboutItem} from "../components/";
import axios from "axios";

import Avatar from '../img/iam.jpg';

const AboutPage = () => {

    const [about, setAbout] = React.useState([]);

    React.useEffect(() => {
        const getAbout = async () => {
            await axios.get(`/db/about.json`)
                .then((res) => {
                    setAbout(res.data);
                });
        }

        getAbout();
    }, []);

    return (
        <section id="about" className="sect section2" data-section-name="about-section">
            <div id="wrap-about-section"
                 className="container align-items-center justify-content-left d-flex wrap-container">
                <span className="big-text">Обо мне</span>
                <div className="row">
                    <div className="col-lg-5">
                        <Tilt className="wrap-imgpic " scale={1.2} transitionSpeed={5000}>
                            <Animate Tag="img" animation="zoom-in" delay={800} className="gl" src={Avatar} alt="poto-hero"/>
                        </Tilt>
                    </div>
                    <div className="col-lg-7 pr-lg-5">
                        <div className="who-i">
                            <Animate Tag="h3" className="pb-3">
                                Мои достижения в <span className="boldi mr-2">Pinterest</span></Animate>
                            <>
                                {
                                    about &&
                                    about.map(item => (
                                        <AboutItem key={item.id} {...item} />
                                    ))
                                }
                            </>
                            <Link className="btn button mt-3" to="portfolio">Дальше</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
