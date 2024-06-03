import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import "./products.css";

// Import images and other assets
import product from "./pngegg (36) 1.png";
import banner from "./image 2.png";
import arrowBack from "../HomePageStyle/arrowback.png";
import arrowNext from "../HomePageStyle/arrownext.png";

function Products({ services }) {
    const [productList, setProductList] = useState([]);
    const [nonCertifiedProductList, setNonCertifiedProductList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [searchResults, setSearchResults] = useState({ products: [], blog_posts: [] });
    const [searchQuery, setSearchQuery] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const { slug } = useParams();

    useEffect(() => {
        fetchCategories();
        if (slug) {
            fetchCategoryProducts(slug);
        } else {
            fetchProducts();
        }
        fetchFrequentlyViewed();
    }, [services, slug]);

    useEffect(() => {
        if (searchQuery.length > 0) {
            fetchSearchResults();
        } else {
            setSearchResults({ products: [], blog_posts: [] });
        }
    }, [searchQuery]);

    useEffect(() => {
        setSearchQuery('');
        setSearchResults({ products: [], blog_posts: [] });
    }, [location]);

    const fetchCategories = () => {
        axios.get('http://91.228.154.48:8000/api/products/categories/')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories', error);
            });
    };

    const fetchProducts = () => {
        services.GetResource(`api/products/certify/`)
            .then(res => {
                setProductList(res);
            });

        services.GetResource(`api/products/not_certify/`)
            .then(res => {
                setNonCertifiedProductList(res);
            });
    };

    const fetchCategoryProducts = (slug) => {
        services.GetResource(`api/products/categories/${slug}`)
            .then(res => {
                setProductList(res);
                setNonCertifiedProductList([]); // Clear non-certified products for category view
            });
    };

    const fetchFrequentlyViewed = () => {
        services.GetResource("api/products/frequently_viewed/")
            .then(res => {
                if (res[0]) {
                    setBlogs(res[0].content);
                }
            });
    };

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
        setSearchQuery('');
        navigate(`/reviews/${productId}`);
    };

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
            <h2 className="pr_h2">Продукты</h2>
            <ul className="pr_bar">
                <li>
                    <NavLink to="/product-search/" className="product_a">
                        Все товары
                    </NavLink>
                </li>
                {categories.map(category => (
                    <li key={category.id}>
                        <NavLink to={`/product-search/${category.slug}`} className="product_a">
                            {category.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className="search-container">
                <input
                    placeholder="Поиск"
                    className="search_input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                    <div className="search-results-dropdown">
                        {searchResults.products.map(product => (
                            <div key={product.id} onClick={() => handleProductClick(product.id)}>
                                {product.name}
                            </div>
                        ))}
                        {searchResults.blog_posts.map(post => (
                            <div key={post.id}>
                                {post.title}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {productList.length > 0 || nonCertifiedProductList.length > 0 ? (
                <div className="products-content">
                    <h2 className="pr_h2_two">Халяльные продукты</h2>
                    <div className="product_row row">
                        {productList.map(res => (
                            <div className="col-lg-2 pr_card" key={res.id}>
                                <Link to={`/reviews/${res.id}`} className="not_link">
                                    <div className="img_layer"><img src={res.img} alt={res.name} /></div>
                                    <div className="text_layer">
                                        <p className="pr_card_bolt">{res.name}</p>
                                        <p className="pr_card_text">{res.details}</p>
                                        <p className="pr_card_label">Халяльный</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {nonCertifiedProductList.length > 0 && (
                        <div className="Not_halal">
                            <h2>Не халяльные продукты</h2>
                            <div className="product_row row">
                                {nonCertifiedProductList.map(res => (
                                    <div className="col-lg-2 pr_card" key={res.id}>
                                        <Link to={`/reviews/${res.id}`} className="not_link">
                                            <div className="img_layer"><img src={res.img} alt={res.name} /></div>
                                            <div className="text_layer">
                                                <p className="pr_card_bolt">{res.name}</p>
                                                <p className="pr_card_text">{res.details}</p>
                                                <p className="pr_card_label not_halal">Не халяльный</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="product_banner row">
                        <div className="col-6 pr_banner_text">
                            <h2>Не нашел нужный продукт?</h2>
                            <p>В таком случае заполни заявку и мы добавим его в наш список</p>
                            <a href="/">Оставить заявку</a>
                        </div>
                        <div className="col-4 pr_banner_img">
                            <img src={banner} alt="banner" />
                        </div>
                    </div>

                    <section className="blog-section Frequently_viewed">
                        <h2>Часто просматривают</h2>
                        <div className="carousel-container">
                            <button onClick={() => moveCard('prev')} className="arrow-prev">
                                <img src={arrowBack} alt="Previous" />
                            </button>
                            <div className="card-container product_row row">
                                {blogs.slice(activeIndex, activeIndex + 4)
                                    .concat(blogs.slice(0, Math.max(0, activeIndex + 4 - blogs.length)))
                                    .map((res, index) => (
                                        <div className="col-lg-2 pr_card" key={index}>
                                            <Link to={`/reviews/${res.id}`} className="not_link">
                                                <div className="img_layer"><img src={res.img} alt={res.name} /></div>
                                                <div className="text_layer">
                                                    <p className="pr_card_bolt">{res.name}</p>
                                                    <p className="pr_card_text">{res.details}</p>
                                                    <p className="pr_card_label">{res.certified ? 'Халяльный' : 'Не халяльный'}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                            </div>
                            <button onClick={() => moveCard('next')} className="arrow-next">
                                <img src={arrowNext} alt="Next" />
                            </button>
                        </div>
                        <div className="dots-container">
                            {renderDots()}
                        </div>
                    </section>
                </div>
            ) : (
                <h1>loading...</h1>
            )}
        </div>
    );
}

export default Products;
