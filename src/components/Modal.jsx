import React from 'react';

import AppContext from "../context/AppContext";

const Modal = () => {
    const {
        clickedImg,
        setClickedImg,
        clickedImgAlt,
        setClickedImgAlt,
        currentImageIndex,
        setCurrentImageIndex,
        clickedArticleId,
        setClickedArticleId,
        articles,
        portfolio,
        getDate
    } = React.useContext(AppContext);

    const closeModal = (e) => {
        if (e.target.classList.contains("dismiss") || e.target.classList.contains("close")) {
            setClickedImg(null);
            setClickedImgAlt(null);
            setClickedArticleId(null);
            document.body.classList.remove("open-modal");
        }
    };

    const nextImage = () => {
        const totalLength = portfolio.items.length;

        if (currentImageIndex + 1 > totalLength) {
            setCurrentImageIndex(1);
            setClickedImg(`img/${portfolio.items[0].image}`);
            setClickedImgAlt(portfolio.items[0].title);
            return;
        }

        setCurrentImageIndex(currentImageIndex + 1);
        setClickedImg(`img/${portfolio.items[currentImageIndex].image}`);
        setClickedImgAlt(portfolio.items[currentImageIndex].title);

    };

    const prevImage = () => {
        const totalLength = portfolio.items.length;

        if (currentImageIndex === 1) {
            setCurrentImageIndex(totalLength);
            setClickedImg(`img/${portfolio.items[totalLength - 1].image}`);
            setClickedImgAlt(portfolio.items[totalLength - 1].title);
            return;
        }

        setCurrentImageIndex(currentImageIndex - 1);
        setClickedImg(`img/${portfolio.items[currentImageIndex - 2].image}`);
        setClickedImgAlt(portfolio.items[currentImageIndex - 2].title);
    };


    return (
        <>
            <div
                className="overlay dismiss"
                onClick={closeModal}
            >
                <div
                    className="dismiss"
                    onClick={closeModal}
                >
                    <i className="bi bi-x close"></i>
                </div>

                {clickedImg && (
                    <>
                        <img src={clickedImg} alt={clickedImgAlt}/>
                        <div className="overlay-arrows-left">
                            <div className="left-arrow" onClick={prevImage}>
                                <i className="bi bi-chevron-left"></i>
                            </div>
                        </div>
                        <div className="overlay-arrows-right">
                            <div className="right-arrow" onClick={nextImage}>
                                <i className="bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </>
                )}

                {clickedArticleId && (
                    <div className="full-article">
                        <div className="article-img mb-3">
                            <img src={articles.items[articles.items.length - clickedArticleId].image} alt={articles.items[articles.items.length - clickedArticleId].title}/>
                        </div>
                        <div className="date">{articles.items[articles.items.length - clickedArticleId].date}</div>
                        <h2>{articles.items[articles.items.length - clickedArticleId].title}</h2>
                        <div className="description" dangerouslySetInnerHTML={{__html: articles.items[articles.items.length - clickedArticleId].description.replace(/\n/g,"<br />")}}></div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Modal;
