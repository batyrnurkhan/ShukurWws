import cola from "./pngegg (36) 3.png"
import "./product_info.css"
import "../products/products.css"
import product2 from "../products/pngegg (36) 1.png";
import banner from "./image 5.png";
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
function Product_info({ services }){
    const { id } = useParams();
    const [product,productSet]=useState()
    useEffect(()=>{
        services.GetResource(   `api/products/view/${id}`)
            .then(res=>{
                productSet(res)
            })

    },[])
    return(
        <diV>
        {product ? (<div className={"product_info"}>
            <div className={"row"}>
                <div className={"col-lg-5 pr_inf_1"}>
                    <div className={"pr_inf_1_1"}>
                        <img src={product.img}/>
                    </div>
                    <div className={"pr_inf_mini_img"}>
                        <img src={product.img}/>
                        <img src={product.img}/>
                        <img src={product.img}/>
                    </div>
                </div>
                <div className={"col-lg-7 pr_inf_2"}>
                    <h2>{product.name}</h2>
                    {product.certified?(<h3>Халяльный</h3>):(<h3 className={"not_halal"}>Не халяльный</h3>)}

                    <div className={"pr_inf_parametr"}>
                        <p className={"header"}>Параметры:</p>
                        <p className={"text"}>{product.parameter}</p>
                    </div>
                    <div className={"pr_inf_parametr"}>
                        <p className={"header"}>Состав</p>
                        <p className={"text"}>{product.ingredients}</p>
                    </div>
                    <div className={"pr_inf_parametr"}>
                        <p className={"header"}>Описание:</p>
                        <p className={"text"}>{product.details}</p>
                    </div>
                    <div className={"pr_inf_2_1"}>
                        <a href={"/"}>Оставить отзыв</a>
                    </div>
                </div>
            </div>
            <div className={"Other_products"}>
                <h2>Другие товары</h2>
                <div className={"product_row row pr_slaider"}>
                    <div className={"col-lg-2 pr_card"}>
                        <div className={"img_layer"}><img src={product2}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>3 000 руб</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card"}>
                        <div className={"img_layer"}><img src={product2}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>3 000 рубН</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card"}>
                        <div className={"img_layer"}><img src={product2}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>3 000 руб</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card"}>
                        <div className={"img_layer"}><img src={product2}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>3 000 руб</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className={"product_banner row"}>
                <div className={"col-8 pr_banner_text"}>
                    <h2>Не хочешь постоянно заходить на сайт?</h2>
                    <p>Тогда скачай наше приложение, нажав на кнопку</p>
                    <a href={"/"}>Скачать</a>
                </div>
                <div className={"col-3 pr_banner_img"}>
                    <img src={banner}/>
                </div>
            </div>
        </div>):
            (<h1>loading...</h1>)}


        </diV>
    )
}
export default Product_info