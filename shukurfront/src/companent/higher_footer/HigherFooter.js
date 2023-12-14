import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./higher_footer.css";
import photo from "./Ellipse 8.png";
import leftArrow from "./left.svg";
import rightArrow from "./right.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HigherFooter() {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch reviews from the API
        axios.get('http://127.0.0.1:8000/api/accounts/reviews/') // Adjust the URL to match your API endpoint
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
                setError(error);
            });
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1,
        nextArrow: <img src={rightArrow} className="hf_right" alt="Next" />,
        prevArrow: <img src={leftArrow} className="hf_left" alt="Previous" />,
        // You may want to add or adjust more settings
    };

    return (
        <div className="higher_footer">
            <div className="higher_footer_b">
                <div className="hf_container">
                    <div className="hf_form_container">
                        <h3>Не нашел продукт?</h3>
                        <p>В таком случае заполни заявку и мы добавим его в наш список</p>
                        <form>
                            <input type="text" placeholder="Имя" />
                            <input type="tel" placeholder="Телефон" />
                            <input type="text" placeholder="Название товара" />
                            <textarea placeholder="Комментарий" />
                            <button type="submit">Отправить</button>
                        </form>
                    </div>
                    <div className="hf_review_container">
                        {reviews.length > 0 ? (
                            <Slider {...sliderSettings}>
                                {reviews.map((review) => (
                                    <div className="hf_card" key={review.id}>
                                        <div className="hf_card_padding">
                                            <img src={photo} alt="User profile" />
                                            <p className="hf_card_one">{review.review_text}</p>
                                            <p className="hf_card_two">{review.user.full_name}</p>
                                            <a href="/reviews" className="hf_card_three">Читать все отзывы</a>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        ) : error ? (
                            <p>There was an error loading the reviews.</p>
                        ) : (
                            <p>Loading reviews...</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HigherFooter;
