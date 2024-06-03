import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./home.scss";
import "../styles/bootstrap-grid.scss";
import home_img from "./home_one.png";
import Header from "../header/header";
import '../styles/HomePage.css';
import arrowBack from '../HomePageStyle/arrowback.png';
import arrowNext from '../HomePageStyle/arrownext.png';

function Home() {
    const [blogs, setBlogs] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        axios.get('http://91.228.154.48:8000/api/blogs/blogposts/')
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the blog posts!', error);
            });
    }, []);

    const moveCard = (direction) => {
        setActiveIndex((current) => {
            if (direction === 'next') {
                return (current + 1) % blogs.length;
            } else {
                return (current - 1 + blogs.length) % blogs.length;
            }
        });
    };

    const renderDots = () => {
        const totalDots = Math.ceil(blogs.length / 4);
        return [...Array(totalDots)].map((_, idx) => (
            <span key={idx} className={`dot ${activeIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}></span>
        ));
    };

    return (
        <div>
            <Header />
            <div className={"base"}>
                <div className={"row"}>
                    <div className={"col-lg-5 home_one_text"}>
                        <h2>О нас</h2>
                        <p>Shukur - мобильное приложение, которое сканирует электронные коды продуктов и легко распознает,
                            является ли еда халяльной, содержит ли она запрещенные ингредиенты или какие-либо химические добавки.
                            Он служит удобным инструментом для людей, которые придерживаются исламских законов о питании (Халяль),
                            гарантируя, что потребляемая ими пища соответствует их религиозным требованиям. Идея – создать мобильное приложение «Shukur»,
                            которое обеспечит простой и удобный доступ к информации о соответствии продукции стандартам Халяль.
                            Мы стремимся упростить повседневную жизнь людей,
                            следующих халяльным требованиям, и помочь им принять решение о выборе продуктов и мест для посещения.</p>
                        <p id={"home_text"}>Миссия нашего проекта — обеспечить доступность информации о халяльной продукции и услугах всем пользователям,
                            независимо от их религиозных убеждений.
                            Мы стремимся сделать процесс выбора халяльной продукции более удобным и найти все ваши потребности в одном приложении.</p>
                    </div>
                    <div className={"col-lg-7 home_two"}>
                        <img src={home_img} alt="Home"/>
                    </div>
                </div>
                <section className="blog-section">
                    <h2>Новости и статьи</h2>
                    <div className="carousel-container">
                        <button onClick={() => moveCard('prev')} className="arrow-prev">
                            <img src={arrowBack} alt="Previous"/>
                        </button>
                        <div className="card-container">
                            {blogs.slice(activeIndex, activeIndex + 4)
                                .concat(blogs.slice(0, Math.max(0, activeIndex + 4 - blogs.length)))
                                .map((blog, index) => (
                                    <div className="blog-card" key={index}>
                                        <Link to={`/blog`} className={"blog_card_link"}>
                                            <img src={blog.blog_img} alt={blog.title}/>
                                            <div className="card-content">
                                                <h3>{blog.title}</h3>
                                                <p>{new Date(blog.created_at).toLocaleDateString('ru-RU')}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                        <button onClick={() => moveCard('next')} className="arrow-next">
                            <img src={arrowNext} alt="Next"/>
                        </button>
                    </div>
                    <div className="dots-container">
                        {renderDots()}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
