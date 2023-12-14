import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./products.css";
import productPlaceholder from "./pngegg (36) 1.png";
import banner from "./image 2.png";
import left from "./left.svg";
import right from "./right.svg";

function Products() {
    const [halalProducts, setHalalProducts] = useState([]);
    const [nonHalalProducts, setNonHalalProducts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products/list/')
            .then(response => {
                setHalalProducts(response.data.filter(product => product.certified));
                setNonHalalProducts(response.data.filter(product => !product.certified));
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className={"products"}>
            <h2 className={"pr_h2"}>Продукты</h2>
            <ul className={"pr_bar"}>
                <li><a href={"/"}>Все товары</a></li>
                <li><a href={"/"}>Гамаки</a></li>
                <li><a href={"/"}>Чехлы</a></li>
                <li><a href={"/"}>Крепеж</a></li>
            </ul>
            <h2 className={"pr_h2_two"}>Халяльные продукты</h2>
            <div className={"product_row row"}>
                {halalProducts.map(product => (
                    <div className={"col-lg-2 pr_card"} key={product.id}>
                        <div className={"img_layer"}><img src={productPlaceholder} alt={product.name} /></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>{product.name}</p>
                            <p className={"pr_card_text"}>{product.details}</p>
                            <p className={"pr_card_label"}>Халяльный</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={"product_banner row"}>
                <div className={"col-6 pr_banner_text"}>
                    <h2>Не нашел нужный продукт?</h2>
                    <p>В таком случае заполни заявку и мы добавим его в наш список</p>
                    <a href={"/"}>Оставить заявку</a>
                </div>
                <div className={"col-4 pr_banner_img"}>
                    <img src={banner} alt="Banner"/>
                </div>
            </div>
            <h2 className={"pr_h2_two"}>Не халяльные продукты</h2>
            <div className={"product_row row"}>
                {nonHalalProducts.map(product => (
                    <div className={"col-lg-2 pr_card not_halal"} key={product.id}>
                        <div className={"img_layer"}><img src={productPlaceholder} alt={product.name} /></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>{product.name}</p>
                            <p className={"pr_card_text"}>{product.details}</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={"Frequently_viewed"}>
                <h2>Часто просматривают</h2>
                <div className={"product_row row pr_slaider"}>
                    <img src={left} className={"pr_left"} alt="Previous"/>
                    <img src={right} className={"pr_right"} alt="Next"/>
                    {/* Add slider/carousel for frequently viewed products */}
                </div>
            </div>
        </div>
    );
}

export default Products;
