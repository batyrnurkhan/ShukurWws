import logo from "../menu/Logo.svg"
import "./footer.scss"
function Footer(){
    return(
        <div className={"footer_back"}>
            <div className={"base"}>
                <div className={"row footer"}>
                    <div className={"col-lg-4"}>
                        <div className={"footer_logo"}><img src={logo}/>Shukur</div>
                        <div className={"footer_one"}>Теперь поиск продуктов стал еще легче</div>
                        <div className={"footer_number"}>+ 7(705) 530 65 19</div>
                        <div className={"footer_email"}>shukurInfo.@gmail.com</div>
                        <div className={"footer_two"}>050040 Казахстан, Алматы. Манаса 30\31</div>
                    </div>
                    <div className={"col-lg-4"}>
                        <div className={"footer_nav"}>Навигация</div>
                        <div>
                            <ul className={"footer_nav_ul"}>
                                <li><a href={"/"}>Главная</a></li>
                                <li><a href={"/"}>Контакты</a></li>
                                <li><a href={"/"}>Время намаза</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className={"footer_nav_ul"}>
                                <li><a href={"/"}>Главная</a></li>
                                <li><a href={"/"}>Контакты</a></li>
                                <li><a href={"/"}>Время намаза</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className={"footer_nav_ul"}>
                                <li><a href={"/"}>Главная</a></li>
                                <li><a href={"/"}>Контакты</a></li>
                                <li><a href={"/"}>Время намаза</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={"col-lg-4"}>
                        <form>
                            <input placeholder={"Поиск"} className={"footer_input"}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer