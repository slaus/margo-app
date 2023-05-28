import React from 'react';

import {BrowserRouter as Router, Link} from "react-router-dom";

import {Loading, Navbar, Navmobile, Header, Main, Footer, Modal} from "./components";
import {loadingRequest, lockBody, getDate} from "./functions"

import './css/app.css';
// import styles from './css/app.module.css';

import AppContext from "./context/AppContext";

import {AuthPage} from "./pages";
import axios from "axios";

function App() {
    const [navbar, setNavbar] = React.useState([]);
    const [clickedImg, setClickedImg] = React.useState(null);
    const [clickedImgAlt, setClickedImgAlt] = React.useState(null);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(null);
    const [isOpenMenu, setIsOpenMenu] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [clickedArticleId, setClickedArticleId] = React.useState(null);
    const [articles, setArticles] = React.useState([]);
    const [portfolio, setPortfolio] = React.useState([]);

    const [isAuth, setIsAuth] = React.useState(true);

    React.useEffect(() => {
        const getNavbar = async () => {
            await axios.get(`/db/navbar.json`)
                .then((res) => {
                    setNavbar(res.data);
                });
        }

        getNavbar();
    }, []);

    React.useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <AppContext.Provider value={{
            navbar,
            portfolio,
            setPortfolio,
            articles,
            setArticles,
            clickedImg,
            setClickedImg,
            currentImageIndex,
            setCurrentImageIndex,
            clickedImgAlt,
            setClickedImgAlt,
            isOpenMenu,
            setIsOpenMenu,
            clickedArticleId,
            setClickedArticleId,
            lockBody,
            getDate
        }}
        >
            {
                // isAuth ?
                //     <AuthPage/>
                //     :
                <>
                    {isLoading ?
                        <Loading/>
                        :
                        <>
                            <Navbar/>
                            <Navmobile/>
                            <Header/>
                            <Main/>
                            <Footer/>
                            {(clickedImg || clickedArticleId) && <Modal/>}
                        </>
                    }
                </>
            }
        </AppContext.Provider>
    );
}

export default App;
