import React from 'react';

import AppContext from "../context/AppContext";

import {Animate} from "../animation";
import {Button} from "./index";

const ArticleItem = ({id, image_cover, title, description, qty, date}) => {
    const {clickedArticleId, setClickedArticleId, lockBody, getDate} = React.useContext(AppContext);

    const handleClick = (id) => {
        setClickedArticleId(id);
        lockBody(true);
    };

    return (
        <Animate delay={200*(qty - id + 1)} className="item-porto">
            <div className="wrap-box">
                <div className="article-img mb-3">
                    <img src={image_cover} alt={title}  />
                </div>
                <div className="date">{date}</div>
                <h3>{title}</h3>
                <p className="mt-3 description" dangerouslySetInnerHTML={{__html: description.slice(0,200).replace(/\n/g,"<br />") + "..."}}></p>
                <div className="read-more">
                    <Button className="invert" onClick={() => handleClick(id)}>Подробнее</Button>
                </div>
            </div>
        </Animate>
    );
};

export default ArticleItem;
