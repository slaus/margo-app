import React from 'react';


import {Animate} from "../animation";
import {ServiceItem} from "../components";
import axios from "axios";

const ServicePage = () => {
    const [service, setService] = React.useState([]);

    React.useEffect(() => {
        const getService = async () => {
            await axios.get(`/db/service.json`)
                .then((res) => {
                    setService(res.data);
                });
        }

        getService();
    }, []);

    return (
        <section id="service" className="sect section4" data-section-name="service-section">
            <div className="container wrap-container">
                <span className="big-text">Обучение</span>
                <div className="row justify-content-center pb-5 mb-5">
                    <div className="col-lg-8">
                        <div className="who-i text-center">
                            <Animate Tag="h3">Что дает ведение аккаунта в <span className="boldi mr-2">Pinterest?</span></Animate>
                            {
                                service.subtitle?.length > 0 &&
                                <Animate Tag="p" delay={400}>
                                    {
                                        service.subtitle?.map((item, index) => (
                                            <React.Fragment key={index}>
                                                {item}{index + 1 !== service.subtitle.length ? <br/> : ""}
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
                       service ?
                           service.items?.map(item => (
                               <ServiceItem key={item.id} {...item}/>
                           )) :
                           <p>No items yet!</p>
                    }
                </div>
            </div>
        </section>
    );
};

export default ServicePage;
