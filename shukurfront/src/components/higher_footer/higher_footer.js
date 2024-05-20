import React, { useState } from "react";
import "./higher_footer.css";
import photo from "./Ellipse 8.png";
import left from "./left.svg";
import right from "./right.svg";

function Higher_footer({ services }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [productName, setProductName] = useState('');
    const [comment, setComment] = useState('');
    const [buttonText, setButtonText] = useState('Отправить');
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        setNumber(formattedValue);
    };

    const review_send = () => {
        setIsSubmitting(true);
        fetch("http://127.0.0.1:8000/api/review/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                number: number,
                product_name: productName,
                coments: comment  // Corrected field name
            })
        })
        .then(response => {
            if (response.ok) {
                setButtonText('Отправлено');
            } else {
                // Handle errors here if needed
                alert('Error submitting review.');
            }
            setIsSubmitting(false);
        })
        .catch(error => {
            console.error('Error:', error);
            setIsSubmitting(false);
        });
    };

    return (
        <div className={"higher_footer"}>
            <div className={"higher_footer_b"}>
                <div className={"hf_container"}>
                    <div className={"row"}>
                        <div className={"col-lg-6 hf_first"}>
                            <h3>Не нашел продукт?</h3>
                            <p>В таком случае заполни заявку и мы добавим его в наш список</p>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input placeholder={"Имя"} onChange={e => setName(e.target.value)} />
                                <input
                                    placeholder="+7XXXXXXXX"
                                    type="tel"
                                    value={number}
                                    onChange={e => formatPhoneNumber(e.target.value)}
                                    maxLength={15}
                                />
                                <input placeholder={"Название товара"} onChange={e => setProductName(e.target.value)} />
                                <textarea placeholder={"Комментарий"} onChange={e => setComment(e.target.value)} />
                                <button onClick={review_send} type={"button"} disabled={isSubmitting}>
                                    {buttonText}
                                </button>
                            </form>
                        </div>
                        <div className={"col-lg-6"}>
                            <div className={"hf_card"}>
                                <div className={"hf_card_padding"}>
                                    <img src={photo} alt="User Feedback" />
                                    <p className={"hf_card_one"}>Базар жок кушты сайт. Жду следующих обновлений</p>
                                    <p className={"hf_card_two"}>Дінислам Мирас</p>
                                    <div className={"slaider_balls"}>
                                        <div id={"loc1"}>-</div>
                                        <div>-</div>
                                        <div>-</div>
                                    </div>
                                    <a className={"hf_card_three"} href="#reviews">Читать все отзывы</a>
                                    <img src={left} className={"hf_left"} alt="Left Arrow" />
                                    <img src={right} className={"hf_right"} alt="Right Arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Higher_footer;
