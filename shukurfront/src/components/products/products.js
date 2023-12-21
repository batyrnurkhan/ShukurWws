import "./products.css"
import product from "./pngegg (36) 1.png"
import banner from "./image 2.png"
import left from "./left.svg"
import right from "./right.svg"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {renderToStaticMarkup} from "react-dom/server";


function Products({services}){
    const [product_list,product_listSet]=useState()
    const [product_list_n,product_list_nSet]=useState()
    const [product_list_f,product_list_fSet]=useState()
    useEffect(()=>{
        services.GetResource("api/products/certify")
            .then(res=>{
                product_listSet(res)

            })

        services.GetResource("api/products/not_certify")
            .then(res=>{
                console.log(res)
                product_list_nSet(res)
            })

        services.GetResource("api/products/frequently_viewed")
            .then(res=>{
                product_list_fSet(res[0].content)
            })


    },[])
    return(
        <div>
            {product_list ? (<div className={"products"}>
                <h2 className={"pr_h2"}>Продукты</h2>
                <ul className={"pr_bar"}>
                    <li><a href={"/"}>Все товары</a></li>
                    <li><a href={"/"}>Гамаки</a></li>
                    <li><a href={"/"}>Чехлы</a></li>
                    <li><a href={"/"}>Крепеж</a></li>
                </ul>
                <h2 className={"pr_h2_two"}>Халяльные продукты</h2>

                <div className={"product_row row"}>
                    {product_list.map(res=>{
                        return (

                            <div className={"col-lg-2 pr_card"}>
                                <Link to={`/reviews/${res.id}`} className={"not_link"}>
                                    <div className={"img_layer"}><img src={res.img}/></div>
                                    <div className={"text_layer"}>
                                        <p className={"pr_card_bolt"}>{res.name}</p>
                                        <p className={"pr_card_text"}>{res.details}</p>
                                        <p className={"pr_card_label"}>Халяльный</p>
                                    </div>
                                </Link>
                            </div>

                        )
                    })}
                </div>
                <div className={"product_banner row"}>
                    <div className={"col-6 pr_banner_text"}>
                        <h2>Не нашел нужный продукт?</h2>
                        <p>В таком случае заполни заявку и мы добавим его в наш список</p>
                        <a href={"/"}>Оставить заявку</a>
                    </div>
                    <div className={"col-4 pr_banner_img"}>
                        <img src={banner}/>
                    </div>
                </div>
                <div className={"Not_halal"}>
                    <h2>Не халяльные продукты</h2>
                    <div className={"product_row row"}>
                        {product_list_n.map(res=>{
                            return (

                                    <div className={"col-lg-2 pr_card not_halal"}>
                                        <Link to={`/reviews/${res.id}`} className={"not_link"}>
                                            <div className={"img_layer"}><img src={res.img}/></div>
                                            <div className={"text_layer"}>
                                                <p className={"pr_card_bolt"}>{res.name}</p>
                                                <p className={"pr_card_text"}>{res.details}</p>
                                                <p className={"pr_card_label"}>Не халяльный</p>
                                            </div>
                                        </Link>
                                    </div>

                            )
                        })}
                    </div>

                </div>
                <div className={"Frequently_viewed"}>
                    <h2>Часто просматривают</h2>
                    <div className={"product_row row pr_slaider"}>
                        <img src={left} className={"pr_left"}/>
                        <img src={right} className={"pr_right"}/>

                        {product_list_f.map(res=>{
                            return (

                                <div className={"col-lg-2 pr_card"}>
                                {res.certified? (
                                    <div>
                                        <Link to={`/reviews/${res.id}`} className={"not_link"}>
                                            <div className={"img_layer"}><img src={res.img}/></div>
                                            <div className={"text_layer"}>
                                                <p className={"pr_card_bolt"}>{res.name}</p>
                                                <p className={"pr_card_text"}>{res.details}</p>
                                                <p className={"pr_card_label"}>Халяльный</p>
                                            </div>
                                        </Link>
                                    </div>

                                ):(
                                    <div >
                                        <Link to={`/reviews/${res.id}`} className={"not_link"}>
                                            <div className={"img_layer"}><img src={res.img}/></div>
                                            <div className={"text_layer"}>
                                                <p className={"pr_card_bolt"}>{res.name}</p>
                                                <p className={"pr_card_text"}>{res.details}</p>
                                                <p className={"pr_card_label"}>Не халяльный</p>
                                            </div>
                                        </Link>
                                    </div>)}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>):
            <h1>loading...</h1>}
        </div>
    )
}

export default Products