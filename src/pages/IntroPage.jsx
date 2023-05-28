import React from 'react';


import {Animate} from "../animation";
import {IntroItem} from "../components";
import axios from "axios";

const IntroPage = () => {
    const [intro, setIntro] = React.useState([]);

    React.useEffect(() => {
        const getIntro = async () => {
            await axios.get(`/db/intro.json`)
                .then((res) => {
                    setIntro(res.data);
                });
        }

        getIntro();
    }, []);

    return (
        <section id="intro" className="sect section4" data-section-name="intro-section">
            <div className="container wrap-container">
                <span className="big-text">Советы</span>
                <div className="row justify-content-center pb-5 mb-5">
                    <div className="col-lg-8">
                        <div className="who-i text-center">
                            <Animate Tag="h3">Для кого подойдет <span className="boldi mr-2">Pinterest?</span></Animate>
                            {
                                intro.subtitle?.length > 0 &&
                                <Animate Tag="p" delay={400}>
                                    {
                                        intro.subtitle?.map((item, index) => (
                                            <React.Fragment key={index}>
                                                {item}{index + 1 !== intro.subtitle.length ? <br/> : ""}
                                            </React.Fragment>
                                        ))
                                    }
                                </Animate>
                            }
                        </div>
                    </div>
                </div>
                <div className="porto-wrap">
                    {
                        intro ?
                            intro.items?.map(item => (
                                <IntroItem key={item.id} {...item}/>
                            )) :
                            <p>No items yet!</p>
                    }
                </div>
            </div>
        </section>
    );
};

export default IntroPage;
