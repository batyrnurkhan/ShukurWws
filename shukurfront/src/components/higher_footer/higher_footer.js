import "./higher_footer.css"
import photo from "./Ellipse 8.png"
import left from "./left.svg"
import right from "./right.svg"
function higher_footer(){
    return(
        <div className={"higher_footer"}>
            <div className={"higher_footer_b"}>
                <div className={"hf_container"}>
                    <div className={"row"}>
                        <div className={"col-lg-6 hf_first"}>
                            <h3>Не нашел продукт?</h3>
                            <p>В таком случае заполни заявку и мы добавим его в наш список</p>
                            <form>
                                <input placeholder={"Имя"}/>
                                <input placeholder={"Телефон"}/>
                                <input placeholder={"Название товара"}/>
                                <textarea placeholder={"Комментарий"}/>
                                <button>Отправить</button>
                            </form>
                        </div>
                        <div className={"col-lg-6"}>

                            <div className={"hf_card"}>
                                <div className={"hf_card_padding"}>
                                    <img src={photo}/>
                                    <p className={"hf_card_one"}>Базар жок кушты сайт. Жду следующих обновлений</p>
                                    <p className={"hf_card_two"}>Дінислам Мирас</p>
                                    <div className={"slaider_balls"}>
                                        <div id={"loc1"}>-</div>
                                        <div>-</div>
                                        <div>-</div>
                                    </div>
                                    <a className={"hf_card_three"}>Читать все отзывы</a>
                                    <img src={left} className={"hf_left"}/>
                                    <img src={right} className={"hf_right"}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default higher_footer