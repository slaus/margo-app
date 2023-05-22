import React, {useState} from 'react';

import AppContext from "../context/AppContext";

import {Animate} from "../animation";
import {ArticleItem, Button} from "../components";
import axios from "axios";

const ArticlePage = () => {
    const {articles, setArticles} = React.useContext(AppContext);

    React.useEffect(() => {
        const getArticles = async () => {
            await axios.get(`/db/articles.json`)
                .then((res) => {
                    setArticles(res.data);
                });
        }

        getArticles();
    }, []);

    const maxArticles = 3;

    return (
        <section id="article" className="sect section3" data-section-name="article-section">
            <div className="container wrap-container text-center">
                <span className="big-text">Статьи</span>
                <div className="row justify-content-center pb-5 mb-5">
                    <div className="col-lg-8">
                        <div className="who-i text-center">
                            <Animate Tag="h3">Мой <span
                                className="boldi ml-2">блог</span></Animate>
                            {
                                articles.subtitle?.length > 0 &&
                                <Animate Tag="p" delay={400}>
                                    {
                                        articles.subtitle?.map((item, index) => (
                                            <React.Fragment key={index}>
                                                {item}{index + 1 !== articles.subtitle.length ? <br/> : ""}
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
                                articles.items?.length > 0 ?
                                    articles.items?.sort((a, b) => a.id > b.id ? -1 : 1).filter((items, index) => index < maxArticles).map(item => (
                                        <ArticleItem key={item.id} qty={articles.length} {...item} />
                                    )) :
                                    <p>Пока нет статей на сайте!</p>
                            }
                        </div>
                        {
                            articles.items?.length > maxArticles &&
                            <Button className="mt-3">Читать все</Button>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArticlePage;
