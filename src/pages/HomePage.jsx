import React from 'react';
import { Link } from "react-scroll";

import Tilt from 'react-parallax-tilt';
import {Animate} from "../animation";
import {HomeItem} from "../components/";
import axios from "axios";


const HomePage = () => {
    const [home, setHome] = React.useState([]);

    React.useEffect(() => {
        const getHome = async () => {
            await axios.get(`/db/home.json`)
                .then((res) => {
                    setHome(res.data);
                });
        }

        getHome();
    }, []);

    return (
        <section id="home" className="sect section1" data-section-name="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 align-items-center justify-content-left d-flex vh-100">
                        <Tilt scale={0.95} transitionSpeed={5000} className="wrap-heroifo gl pb-4 pt-5">
                            <Animate Tag="p"><a href="https://instagram.com/margo_pro_pinterest?igshid=OGQ5ZDc2ODk2ZA==" target="blank"><i className="fa fa-instagram"></i> margo_pro_pinterest</a></Animate>
                            <Animate Tag="h1" delay={400}>
                                <span className="boldi">Продвижение брендов и бизнеса в Pinterest</span> Курс «ProPINterest»</Animate>
                            <>
                                {
                                    home &&
                                    home.map(item => (
                                        <HomeItem key={item.id} {...item}/>))
                                }
                            </>
                            <Link className="btn button mt-3" to="about">Дальше</Link>

                        </Tilt>
                    </div>
                </div>
                <div className="mainvisual__scroll">
                    <span>EXPLORE</span>
                    <div className="bar"></div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
