import "./higher_footer.css"
import photo from "./Ellipse 8.png"
import left from "./left.svg"
import right from "./right.svg"
import React, {useState} from "react";

function Higher_footer({services}){
    const [name,nameSet]=useState();
    const [number, numberSet] = useState('');
    const [product_name,product_nameSet]=useState();
    const [comment,commentSet]=useState();

    const formatPhoneNumber = (value) => {
            let formattedValue = value.startsWith('+') ? value : '+' + value;

            const numbersOnly = formattedValue.slice(1).replace(/[^\d]/g, '');
            formattedValue = '+' + numbersOnly;

        if (numbersOnly.length > 1) {
           formattedValue = '+' + numbersOnly.substring(0, 1);

            if (numbersOnly.length <= 4) {
                formattedValue += ' ' + numbersOnly.substring(1);
            } else if (numbersOnly.length <= 7) {
                formattedValue += ' ' + numbersOnly.substring(1, 4) + ' ' + numbersOnly.substring(4);
            } else {
                formattedValue += ' ' + numbersOnly.substring(1, 4) + ' ' + numbersOnly.substring(4, 7) + ' ' + numbersOnly.substring(7);
            }
        }
        numberSet(formattedValue);

    };



    const review_send=()=>{
        fetch("http://127.0.0.1:8000/api/review", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    name: name,
    number: number,
    product_name: product_name,
    coments: comment  // Corrected field name
})
})

        /*services.SendResource("api/review",JSON.stringify({
            name: name,
            number: number,
            product_name: product_name,
            coments: comment
        }))*/
    }
    return(
        <div className={"higher_footer"}>
            <div className={"higher_footer_b"}>
                <div className={"hf_container"}>
                    <div className={"row"}>
                        <div className={"col-lg-6 hf_first"}>
                            <h3>Не нашел продукт?</h3>
                            <p>В таком случае заполни заявку и мы добавим его в наш список</p>
                            <form>
                                <input placeholder={"Имя"} onChange={e => nameSet(e.target.value)}/>
                                <input
                                placeholder="+7XXXXXXXX"
                                type="tel"
                                value={number}
                                onChange={e => formatPhoneNumber(e.target.value)}
                                maxLength={15}/>
                                <input placeholder={"Название товара"} onChange={e => product_nameSet(e.target.value)}/>
                                <textarea placeholder={"Комментарий"} onChange={e => commentSet(e.target.value)}/>
                                <button onClick={()=>review_send()} type={"button"}>Отправить</button>
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

export default Higher_footer