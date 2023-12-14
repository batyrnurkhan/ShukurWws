import "./home.scss"
import "../bootstrap-grid.scss"
import home_img from "./home_one.png"
import card_img from "./Rectangle 18.png"
import left from "./left.svg"
import right from "./right.svg"
import Header from "../header/header";
import axios from 'axios';
import {useEffect, useState} from "react";

function Home(){
    const [blogPosts, setBlogPosts] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const postsPerPage = 4;

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/blogs/blogposts/')
            .then((response) => {
                setBlogPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching blog posts:', error);
            });
    }, []);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    const numberOfDots = Math.ceil(blogPosts.length / postsPerPage);

     return(
        <div>
            <Header />
            <div className={"base"}>
                {/* ... (other parts of your component) */}
                <div className={"home_three"}>
                    <h2>Новости и статьи</h2>
                    <div className={'row card'}>
                        {blogPosts.slice(activeIndex, activeIndex + postsPerPage).map((post) => (
                            <div className="home_card col-md-3" key={post.id}>
                                <div className="card_shell">
                                    <a href={`/blogposts/${post.id}`}>
                                        <div className="image-container">
                                            <img src={post.image1} alt={post.title} />
                                        </div>
                                        <div className="card_text">{post.title}</div>
                                        <div className="card_data">{post.created_at}</div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={"home_balls"}>
                        {[...Array(numberOfDots)].map((_, index) => (
                            <div
                                key={index}
            className={`home_ball ${activeIndex === index * postsPerPage ? 'active' : ''}`}
            onClick={() => handleDotClick(index * postsPerPage)}
                            >
                                -
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home