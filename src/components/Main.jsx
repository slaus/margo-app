import React from 'react';
import {
    AboutPage,
    ArticlePage,
    ContactPage,
    HomePage,
    IntroPage,
    PortfolioPage,
    PricePage,
    ServicePage,
    TestimonialPage
} from "../pages";

const Main = () => {

    return (
        <main>
            <div className="o-line"></div>
            <div className="o-line"></div>
            <div className="o-line"></div>

            <HomePage/>
            <IntroPage />
            <ServicePage />
            <AboutPage />
            <PortfolioPage />
            <PricePage />
            <TestimonialPage />
            <ArticlePage/>
            <ContactPage />
        </main>
    );
};

export default Main;
