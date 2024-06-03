import cola from "./pngegg (36) 3.png";
import "./product_info.css";
import "../products/products.css";
import product2 from "../products/pngegg (36) 1.png";
import banner from "./image 5.png";
import vector from "./Vector.svg";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Product_info({ services }) {
    const { id } = useParams();
    const [product, productSet] = useState();
    const [product_img_triger, product_img_trigerSet] = useState(false);
    const [product_img, product_imgSet] = useState();
    const [product_img_list, product_img_listSet] = useState();

    useEffect(() => {
        services.GetResource(`api/products/view/${id}`)
            .then(res => {
                productSet(res);
                product_img_listSet([res.img, res.img_2, res.img_3, res.img_4]);
                product_imgSet(res.img);
            })
    }, [id]);

    const produc_img_func = (img) => {
        product_img_trigerSet(true);
        product_imgSet(img);
    }

    const product_img_exit = () => {
        product_img_trigerSet(false);
    }

    return (
        <div>
            {product_img_triger ? (
                <div className="product_triger">
                    <div className="product_triger_vector">
                        <img src={vector} onClick={product_img_exit} />
                    </div>
                    <img className="product_img" src={product_img} />
                </div>
            ) : (<div></div>)}

            {product ? (
                <div className="product_info">
                    <div className="row">
                        <div className="col-lg-5 pr_inf_1">
                            <div className="pr_inf_1_1">
                                <img src={product_img} onClick={() => produc_img_func(product_img)} />
                            </div>
                            <div className="pr_inf_mini_img">
                                {product_img_list.map((res, index) => (
                                    <img src={res} onClick={() => produc_img_func(res)} key={index} />
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-7 pr_inf_2">
                            <h2>{product.name}</h2>
                            <h3 className={product.certification_status === 'not_halal' ? 'not_halal' : ''}>
                                {product.certification_status === 'halal' && 'Халяльный'}
                                {product.certification_status === 'verified' && 'Проверный'}
                                {product.certification_status === 'doubtful' && 'Сомнителный'}
                                {product.certification_status === 'not_halal' && 'Не халяльный'}
                            </h3>

                            <div className="pr_inf_parametr">
                                <p className="header">Параметры:</p>
                                <p className="text">{product.parameter}</p>
                            </div>
                            <div className="pr_inf_parametr">
                                <p className="header">Состав:</p>
                                <p className="text">{product.ingredients}</p>
                            </div>
                            <div className="pr_inf_parametr">
                                <p className="header">Описание:</p>
                                <p className="text">{product.details}</p>
                            </div>
                            <div className="pr_inf_2_1">
                                <a href="/">Оставить отзыв</a>
                            </div>
                        </div>
                    </div>
                    <div className="Other_products">
                        <h2>Другие товары</h2>
                        <div className="product_row row pr_slaider">
                            <div className="col-lg-2 pr_card">
                                <div className="img_layer"><img src={product2} /></div>
                                <div className="text_layer">
                                    <p className="pr_card_bolt">Название товара</p>
                                    <p className="pr_card_text">Описание гамака, основные параметры, материал</p>
                                    <p className="pr_card_label ">3 000 руб</p>
                                </div>
                            </div>
                            <div className="col-lg-2 pr_card">
                                <div className="img_layer"><img src={product2} /></div>
                                <div className="text_layer">
                                    <p className="pr_card_bolt">Название товара</p>
                                    <p className="pr_card_text">Описание гамака, основные параметры, материал</p>
                                    <p className="pr_card_label ">3 000 руб</p>
                                </div>
                            </div>
                            <div className="col-lg-2 pr_card">
                                <div className="img_layer"><img src={product2} /></div>
                                <div className="text_layer">
                                    <p className="pr_card_bolt">Название товара</p>
                                    <p className="pr_card_text">Описание гамака, основные параметры, материал</p>
                                    <p className="pr_card_label ">3 000 руб</p>
                                </div>
                            </div>
                            <div className="col-lg-2 pr_card">
                                <div className="img_layer"><img src={product2} /></div>
                                <div className="text_layer">
                                    <p className="pr_card_bolt">Название товара</p>
                                    <p className="pr_card_text">Описание гамака, основные параметры, материал</p>
                                    <p className="pr_card_label ">3 000 руб</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product_banner row">
                        <div className="col-8 pr_banner_text">
                            <h2>Не хочешь постоянно заходить на сайт?</h2>
                            <p>Тогда скачай наше приложение, нажав на кнопку</p>
                            <a href="/">Скачать</a>
                        </div>
                        <div className="col-3 pr_banner_img">
                            <img src={banner} />
                        </div>
                    </div>
                </div>
            ) : (
                <h1>loading...</h1>
            )}
        </div>
    );
}

export default Product_info;
