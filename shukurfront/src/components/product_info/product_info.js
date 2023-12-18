import cola from "./pngegg (36) 3.png"
import "./product_info.css"
import "../products/products.css"
import product from "../products/pngegg (36) 1.png";
import banner from "./image 5.png";
function product_info(){
    return(
        <div className={"product_info"}>
            <div className={"row"}>
                <div className={"col-lg-5 pr_inf_1"}>
                    <div className={"pr_inf_1_1"}>
                        <img src={cola}/>
                    </div>
                    <div className={"pr_inf_mini_img"}>
                        <img src={cola}/>
                        <img src={cola}/>
                        <img src={cola}/>
                    </div>
                </div>
                <div className={"col-lg-7 pr_inf_2"}>
                    <h2>Название товара</h2>
                    <h3>Халяльный</h3>
                    <div className={"pr_inf_parametr"}>
                        <p className={"header"}>Параметры:</p>
                        <p className={"text"}>Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                    <div className={"pr_inf_parametr"}>
                        <p className={"header"}>Состав</p>
                        <p className={"text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna.</p>
                    </div>
                    <div className={"pr_inf_parametr"}>
                        <p className={"header"}>Описание:</p>
                        <p className={"text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla.</p>
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
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>3 000 руб</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>3 000 рубН</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>3 000 руб</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card"}>
                        <div className={"img_layer"}><img src={product}/></div>
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
        </div>
    )
}
export default product_info