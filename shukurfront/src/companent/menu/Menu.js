import "../base.scss"
import "./menu.scss"
import logo from "./Logo.svg"
import user from "./user 1.svg"
import feater from "./Feather Icon.svg"
import search from "./search (1) 1.png"
function Menu() {
    return (
        <div>
            <div className={"nav_back"}>
                <div className={"base"}>
                    <nav className={"header_nav"}>
                        <div className={"slogan"}>Теперь поиск продуктов стал еще легче</div>
                        <div>
                            <ul>
                                <a href={"/"}><li id={"unique_link"}>Главная</li></a>
                                <a href={"/"}><li>категории</li></a>
                                <a href="/prayer"><li>Время намаза</li></a>
                                <a href="/products"><li>Поиск продукта</li></a> {/* Update this line */}
                                <a href={"/"}><li>Отзывы</li></a>
                                <a href={"/"}><li>Блог</li></a>
                                <a href={"/"}><li>Карта</li></a>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className={"menu_back"}>
                <div className={"custom_base"}>
                    <span><img src={logo} className={"logo"}/><span className={"logo_text"}>Shukur</span></span>
                    <span className={"menu_bt_div"}>
                    <span className={"app_button"}><a href={"/"}>Cкачать приложение</a></span>
                    <div className={"menu_button"}>
                        <a href={"/"}>
                        <img src={user} className={"menu_bt_img"}/>
                        <div>Личный кабинет</div>
                        </a>
                    </div>
                    <div className={"menu_button"}>
                        <a href={"/"}>
                        <img src={feater} className={"menu_bt_img"}/>
                        <div>Рейтинги</div>
                        </a>
                    </div>
                    <div className={"menu_button"} id={'menu_bt_last'}>
                        <a href={"/"}>
                        <img src={search} className={"menu_bt_img"}/>
                        <div>Поиск</div>
                        </a>
                    </div>
                </span>
                </div>
            </div>
        </div>
    )
}
export default Menu;
