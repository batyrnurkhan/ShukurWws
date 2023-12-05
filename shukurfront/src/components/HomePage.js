import React, { useState, useEffect } from 'react';
import './styles/HomePage.css';
import logo from './HomePageStyle/logo.png'; // Make sure this is the correct path to your logo image
import logoText from './HomePageStyle/ShukurText.png';
import heroImage from './HomePageStyle/homepage1back.png'; // Path to the hero image used in the screenshot
import axios from 'axios'; // make sure to install axios with `npm install axios`
import {Link} from "react-router-dom";
import arrowBack from './HomePageStyle/arrowback.png'; // Adjust the path as necessary
import arrowNext from './HomePageStyle/arrownext.png'; // Adjust the path as necessary
import Footer from './Footer'; // Update the path accordingly
import MainNavbar from "./MainNavbar";
import TopNavbar from "./TopNavbar";
import Picture from "./HomePageStyle/pic1.png";

const HomePage = () => {
    const [blogs, setBlogs] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0); // To keep track of the current active card

    useEffect(() => {
        axios.get('http://localhost:8000/api/blogs/blogposts/') // Make sure this matches your Django URL
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the blog posts!', error);
            });
    }, []);

    const moveCard = (direction) => {
        setActiveIndex((current) => {
            // Calculate the new index based on direction and wrap around if needed
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
        <div className="homepage">
            <TopNavbar/>
            <MainNavbar/>

            <section className="hero-section">
                <img src={heroImage} alt="Assorted Foods" className="hero-image"/>
                <div className="hero-content">
                    <h1>Найди альтернативные продукты при помощи нашего приложения.</h1>
                    <p>Просто отсканируй штрих код, остальное сделает Shukur</p>
                    <button className="hero-button">Узнать больше</button>
                </div>
            </section>

            <section className="about-section">
        <div className="about-content">
          <h2>О Нас</h2>
          <p>Shukur - мобильное приложение, которое сканирует электронные коды продуктов и легко распознает...</p>
          {/* Add more content based on your design */}
        </div>
        <div className="about-illustration">
          {/* Replace 'yourIllustrationPath' with the path to your illustration image */}
          <img src={Picture} alt="About Us Illustration" />
        </div>
      </section>

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
                                    <img src={blog.image1} alt={blog.title}/>
                                    <div className="card-content">
                                        <h3>{blog.title}</h3>
                                        <p>{new Date(blog.created_at).toLocaleDateString('ru-RU')}</p>
                                    </div>
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
            <Footer/>
        </div>
    );
};


export default HomePage;
