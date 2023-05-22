import React from 'react';
import {
    AboutPage,
    ArticlePage,
    ContactPage,
    HomePage,
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
            <AboutPage />
            <PortfolioPage />
            <ServicePage />
            <PricePage />
            <TestimonialPage />
            <ArticlePage/>
            <ContactPage />
        </main>
    );
};

export default Main;
