import React from 'react';

import {Animate} from "../animation";
import {PriceItem} from "../components";
import axios from "axios";

const PricePage = () => {
    const [price, setPrice] = React.useState([]);

    React.useEffect(() => {
        const getPrice = async () => {
            await axios.get(`/db/price.json`)
                .then((res) => {
                    setPrice(res.data);
                });
        }

        getPrice();
    }, []);

    return (
        <section id="price" className="sect section4" data-section-name="price">
            <div className="container wrap-container">
                <span className="big-text">Тарифы</span>
                <div className="row justify-content-center pb-5 mb-5">
                    <div className="col-lg-8">
                        <div className="who-i text-center">
                            <Animate Tag="h3"><span className="boldi mr-2">Варианты</span> ведения</Animate>
                            {
                                price.subtitle?.length > 0 &&
                                <Animate Tag="p" delay="400" data-aos="fade-up" data-aos-delay="300"
                                         data-aos-offset="0">
                                    {
                                        price.subtitle?.map((item, index) => (
                                            <React.Fragment key={index}>
                                                {item}{index + 1 !== price.subtitle.length ? <br/> : ""}
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
                        price.items ?
                        price.items?.map(item => (
                            <PriceItem key={item.id} {...item} />
                        )) :
                            <p>No prices yet!</p>
                    }
                </div>
            </div>
        </section>
    );
};

export default PricePage;
