import "./user_profile.css"
import "../products/products.css"
import pen from "./bi_vector-pen.svg"
import photo_2 from "./Group 136.svg"
import checked from "./el_ok-circle.svg"
import arrow from "./Group 94.svg"
import product from "../products/pngegg (36) 1.png";
function User_Profile(){
    return(
        <div>
            <div className={"User_profile_header"}>
                <h2 className={"UP_h2"}>Личный кабинет</h2>
            </div>
            <div className={"User_profile"}>

                <div className={"row"}>
                    <div className={"col-lg-4 UP_1_container"}><img src={photo_2}/></div>
                    <div className={"col-lg-8 UP_2_container"}>
                        <h3 className={"UP_brim"}>Дінислам Мирас
                            <img src={pen} className={"UP_pen"}/>
                            <div className={"UP_pen_text"}>Ред.</div>
                        </h3>
                        <div className={"UP_brim"}>
                            <img src={checked}/>
                            <div className={"UP_brim_text"}><span>E-mail:</span><span className={"UP_brim_text_margin"}>29294@iitu.edu.kz</span></div>
                            <img src={pen} className={"UP_pen"}/>
                            <div className={"UP_pen_text"}>Ред.</div>
                        </div>
                        <div className={"UP_brim"}>
                            <img src={checked}/>
                            <div className={"UP_brim_text"}><span>Телефон:</span><span className={"UP_brim_text_margin"}>8 (888) 888-88-88</span></div>
                            <img src={pen} className={"UP_pen"}/>
                            <div className={"UP_pen_text"}>Ред.</div>
                        </div>
                        <div className={"UP_brim"}>
                            <div className={"UP_brim_text"}><span>Адрес:</span><span className={"UP_brim_text_margin"}>Алматы ...</span></div>
                            <img src={pen} className={"UP_pen"}/>
                            <div className={"UP_pen_text"}>Ред.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"UP_green_back"}>
                <div className={"UP_search_wrap"}>
                    <div className={"UP_search"}>
                        <h2>Поиск</h2>
                        <form className={"UP_search_form"}>
                            <label><input/><button><img src={arrow}/></button></label>
                        </form>
                    </div>
                </div>
            </div>
            <div className={"User_profile UP_searcH_history"}>
                <h2>История поиска</h2>
                <div className={"product_row row pr_slaider"}>

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
            </div>
        </div>
    )
}
export default User_Profile