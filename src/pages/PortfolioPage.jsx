import React from 'react';

import AppContext from "../context/AppContext";

import {Button, PortfolioItem} from "../components";
import {Animate} from "../animation";
import axios from "axios";

const PortfolioPage = () => {
    const {portfolio, setPortfolio} = React.useContext(AppContext);

    React.useEffect(() => {
        const getPortfolio = async () => {
            await axios.get(`/db/portfolio.json`)
                .then((res) => {
                    setPortfolio(res.data);
                });
        }

        getPortfolio();
    }, []);

    const [isShowMoreImages, setIsShowMoreImages] = React.useState(false);
    const maxImages = 6;

    const showMoreImages = () => {
        setIsShowMoreImages(true);
    }

    return (
        <section id="portfolio" className="sect section3" data-section-name="portfolio-section">
            <div className="container wrap-container text-center">
                <span className="big-text">Достижения</span>
                <div className="row justify-content-center pb-5 mb-5">
                    <div className="col-lg-8">
                        <div className="who-i text-center">
                            <Animate Tag="h3">Примеры <span
                                className="boldi ml-2">кейсов</span></Animate>
                            {
                                portfolio.subtitle?.length > 0 &&
                                <Animate Tag="p" delay={400}>
                                    {
                                        portfolio.subtitle?.map((item, index) => (
                                            <React.Fragment key={index}>
                                                {item}{index + 1 !== portfolio.subtitle.length ? <br/> : ""}
                                            </React.Fragment>
                                        ))
                                    }
                                </Animate>
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="porto-wrap text-left">
                            {
                                portfolio.items ?
                                    isShowMoreImages ?
                                        portfolio.items?.map(item => (
                                            <PortfolioItem key={item.id} {...item} />
                                        )) :
                                        portfolio.items?.filter((items, index) => index < maxImages).map(item => (
                                            <PortfolioItem key={item.id} {...item} />
                                        )) :
                                    <p>No images yet!</p>
                            }
                        </div>
                        {
                            portfolio.items?.length > maxImages && !isShowMoreImages && (
                                <Button className="mt-3"
                                        onClick={showMoreImages}
                                >Показать все</Button>
                            )
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioPage;
