import "./products.css"
import product from "./pngegg (36) 1.png"
import banner from "./image 2.png"
import left from "./left.svg"
import right from "./right.svg"
function Products(){
    return(
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
                <div className={"col-lg-2 pr_card"}>
                    <div className={"img_layer"}><img src={product}/></div>
                    <div className={"text_layer"}>
                        <p className={"pr_card_bolt"}>Название товара</p>
                        <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                        <p className={"pr_card_label"}>Халяльный</p>
                    </div>

                </div>
                <div className={"col-lg-2 pr_card"}>
                    <div className={"img_layer"}><img src={product}/></div>
                    <div className={"text_layer"}>
                        <p className={"pr_card_bolt"}>Название товара</p>
                        <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                        <p className={"pr_card_label"}>Халяльный</p>
                    </div>

                </div>
                <div className={"col-lg-2 pr_card"}>
                    <div className={"img_layer"}><img src={product}/></div>
                    <div className={"text_layer"}>
                        <p className={"pr_card_bolt"}>Название товара</p>
                        <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                        <p className={"pr_card_label"}>Халяльный</p>
                    </div>

                </div>
                <div className={"col-lg-2 pr_card"}>
                    <div className={"img_layer"}><img src={product}/></div>
                    <div className={"text_layer"}>
                        <p className={"pr_card_bolt"}>Название товара</p>
                        <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                        <p className={"pr_card_label"}>Халяльный</p>
                    </div>

                </div>
                <div className={"col-lg-2 pr_card"}>
                    <div className={"img_layer"}><img src={product}/></div>
                    <div className={"text_layer"}>
                        <p className={"pr_card_bolt"}>Название товара</p>
                        <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                        <p className={"pr_card_label"}>Халяльный</p>
                    </div>

                </div>
                <div className={"col-lg-2 pr_card"}>
                    <div className={"img_layer"}><img src={product}/></div>
                    <div className={"text_layer"}>
                        <p className={"pr_card_bolt"}>Название товара</p>
                        <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                        <p className={"pr_card_label"}>Халяльный</p>
                    </div>

                </div>
                <div className={"col-lg-2 pr_card"}>
                    <div className={"img_layer"}><img src={product}/></div>
                    <div className={"text_layer"}>
                        <p className={"pr_card_bolt"}>Название товара</p>
                        <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                        <p className={"pr_card_label"}>Халяльный</p>
                    </div>

                </div>
                <div className={"col-lg-2 pr_card"}>
                    <div className={"img_layer"}><img src={product}/></div>
                    <div className={"text_layer"}>
                        <p className={"pr_card_bolt"}>Название товара</p>
                        <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                        <p className={"pr_card_label"}>Халяльный</p>
                    </div>

                </div>
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
                    <div className={"col-lg-2 pr_card not_halal"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card not_halal"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card not_halal"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card not_halal"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card not_halal"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card not_halal"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card not_halal"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card not_halal"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className={"Frequently_viewed"}>
                <h2>Часто просматривают</h2>
                <div className={"product_row row pr_slaider"}>
                    <img src={left} className={"pr_left"}/>
                    <img src={right} className={"pr_right"}/>
                    <div className={"col-lg-2 pr_card not_halal"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card not_halal"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products