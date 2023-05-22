import React from 'react';

import {Animate} from "../animation";

const PriceItem = ({id, price, title, description, popular, course}) => {
    return (
        <Animate delay={200 * id} className="item-porto">
            <div className="wrap-box">
                {
                    popular &&
                    <>
                        <div className="borderOutline"></div>
                        <div className="badgeWrap">
                            <div className="badgeContainer"><span className="badge">Оптимальный</span>
                            </div>
                        </div>
                    </>
                }
                <div className="cardHeader">
                    <div>
                        <h3 id="tier-growth">{title}</h3>
                        <div className="priceWrap">
                            <span className="priceContainer">
                                <span>{`${title === "VIP" ? price * 2 : price}`}</span>
                                <span className="currency">руб.</span>
                            </span>
                        </div>
                    </div>
                    <div
                        className={`headerBtnBlock ${popular ? 'active' : ''}`}
                    >
                        <div>
                            {/*<h6 className="text-center mb-2">Выбрать оплату</h6>*/}
                            <form method="POST" action="https://yoomoney.ru/quickpay/confirm.xml">
                                <input type="hidden" name="receiver" value="4100116346312966"/>
                                <input type="hidden" name="label" value={`Оплата за курс «${title}» с сайта pro-pinterest.ru, заказ $order_id`}/>
                                <input type="hidden" name="quickpay-form" value="button"/>
                                <input type="hidden" name="successURL" value="https://pro-pinterest.ru/success"/>
                                <input type="hidden" name="sum" value={price} data-type="number"/>
                                <div className="payment d-none">
                                    <label>
                                        <input type="radio" name="paymentType" value="PC" /><span>ЮMoney</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="paymentType" value="AC" /><span>Карта</span>
                                    </label>
                                </div>
                                <input className="btn button" type="submit" value={`${title === "VIP" ? "Предоплата 50%" : "Купить " + title}`} />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="cardBody">
                    <p className="text-foreground text-center pb-4 font-weight-bold">{course}</p>
                    <ul role="list">

                        {description.map((item, index) => (
                            <li key={index}>
                                <div><i className="bi bi-check-circle"></i></div>
                                <p className="feature">{item}</p>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </Animate>
    );
};

export default PriceItem;
