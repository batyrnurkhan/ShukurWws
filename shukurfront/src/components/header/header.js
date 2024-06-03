import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import right from "./right.svg";
import left from "./left.svg";
import "./header.scss";

function Header() {
    const [slaider, slaiderSet] = useState("header_back");
    const [loc1, loc1Set] = useState("loc");
    const [loc2, loc2Set] = useState();
    const [loc3, loc3Set] = useState();

    const navigate = useNavigate();
    const location = useLocation();
    const [searchResults, setSearchResults] = useState({ products: [], blog_posts: [] });
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (searchQuery.length > 0) {
            fetchSearchResults();
        } else {
            setSearchResults({ products: [], blog_posts: [] });
        }
    }, [searchQuery]);

    useEffect(() => {
        // Reset search when the location changes
        setSearchQuery('');
        setSearchResults({ products: [], blog_posts: [] });
    }, [location]);

    const fetchSearchResults = async () => {
        try {
            const response = await axios.get(`http://91.228.154.48:8000/search/?query=${encodeURIComponent(searchQuery)}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching search results', error);
        }
    };

    const handleProductClick = (productId) => {
        window.scrollTo(0, 0);
        setSearchQuery(''); // Reset the search query
        navigate(`/reviews/${productId}`);
    };

    return (
        <div className={slaider}>
            <div className={"base"}>
                <span className={"header_text"}>Находи альтернативные продукты при помощи нашего приложения.
                    Просто отсканируй штрих код, остальное сделает Shukur</span>
            </div>
            <div className={"slider"}>
                <img src={right} className={"right"} onClick={() => right_click()} />
                <div className={"balls"}>
                    <span className={"ball"} id={loc1}>-</span>
                    <span className={"ball"} id={loc2}>-</span>
                    <span className={"ball"} id={loc3}>-</span>
                </div>
                <img src={left} className={"left"} onClick={() => left_click()} />
            </div>
            <form>
                <input
                    placeholder={"Поиск"}
                    className={"header_input"}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>
            <div className="search-results-dropdown">
                {searchResults.products && searchResults.products.map(product => (
                    <div key={product.id} onClick={() => handleProductClick(product.id)}>
                        {product.name}
                    </div>
                ))}
                {searchResults.blog_posts && searchResults.blog_posts.map(post => (
                    <div key={post.id}>
                        {post.title}
                    </div>
                ))}
            </div>
        </div>
    );

    function right_click() {
        if (slaider === "header_back") {
            loc2Set("loc");
            loc1Set("");
            loc3Set("");
            slaiderSet("header_back1");
            console.log(slaider[slaider.length]);
        } else if (slaider === "header_back1") {
            loc2Set("");
            loc1Set("");
            loc3Set("loc");
            slaiderSet("header_back2");
        }
    }

    function left_click() {
        if (slaider === "header_back1") {
            slaiderSet("header_back");
            loc2Set("");
            loc1Set("loc");
            loc3Set("");
        } else if (slaider === "header_back2") {
            loc2Set("loc");
            loc1Set("");
            loc3Set("");
            slaiderSet("header_back1");
        }
    }
}

export default Header;
