import React from 'react';

import {Animate} from "../animation";
import {TestimonialItem} from "../components";
import axios from "axios";

const TestimonialPage = () => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = React.useState(1);
    const [testimonial, setTestimonial] = React.useState([]);

    React.useEffect(() => {
        const getTestimonial = async () => {
            await axios.get(`/db/testimonial.json`)
                .then((res) => {
                    setTestimonial(res.data);
                });
        }

        getTestimonial();
    }, []);

    const [height, setHeight] = React.useState(null)
    const heightRef = React.useRef(null)

    React.useEffect(() => {
        setHeight(heightRef.current.clientHeight);
    },[])

    const nextTestimonial = () => {
        const totalLength = testimonial.items.length;

        if (currentTestimonialIndex + 1 > totalLength) {
            setCurrentTestimonialIndex(1);
            return;
        }

        setCurrentTestimonialIndex(currentTestimonialIndex + 1);
    }

    const prevTestimonial = () => {
        const totalLength = testimonial.items.length;

        if (currentTestimonialIndex === 1) {
            setCurrentTestimonialIndex(totalLength);
            return;
        }

        setCurrentTestimonialIndex(currentTestimonialIndex - 1);
    }

    return (
        <section id="testimonial">
            <div className="container wrap-container">
                <span className="big-text">Разговоры</span>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="who-i text-center">
                            <Animate Tag="h3"><span className="boldi mr-2">Отзывы</span> о курсах</Animate>
                            {
                                testimonial.subtitle?.length > 0 &&
                                <Animate Tag="p" delay={400}>
                                    {
                                        testimonial.subtitle?.map((item, index) => (
                                            <React.Fragment key={index}>
                                                {item}{index + 1 !== testimonial.subtitle.length ? <br/> : ""}
                                            </React.Fragment>
                                        ))
                                    }
                                </Animate>
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 pt-5">
                        <div ref={heightRef} id="wrap-testimonial" className="keen-slider" style={{height: height}}>

                            <>
                                {
                                    testimonial.items ?
                                        testimonial.items?.filter((item, index) => index === currentTestimonialIndex - 1 ).map(item => (
                                            <TestimonialItem key={item.id} {...item}/>
                                        )) :
                                        <p>No testimonials yet!</p>
                                }
                            </>

                            <div className="overlay-arrows-left">
                                <div className="left-arrow" onClick={prevTestimonial}>
                                    <i className="bi bi-chevron-left"></i>
                                </div>
                            </div>
                            <div className="overlay-arrows-right">
                                <div className="right-arrow" onClick={nextTestimonial}>
                                    <i className="bi bi-chevron-right"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialPage;
