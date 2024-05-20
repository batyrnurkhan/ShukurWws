import "../products/products.css"
import product from "../products/pngegg (36) 1.png"
import banner from "../products/image 2.png"
import left from "../products/left.svg"
import right from "../products/right.svg"
import React, {useEffect, useState} from "react";
import {Link, NavLink, useParams, useNavigate} from "react-router-dom";
import {renderToStaticMarkup} from "react-dom/server";
import arrowBack from "../HomePageStyle/arrowback.png";
import arrowNext from "../HomePageStyle/arrownext.png";


function Product_categories({services}){
        const [categories, setCategories] = useState([]);


    const [product_list,product_listSet]=useState()
    const [product_list_n,product_list_nSet]=useState()

    const [blogs, setBlogs] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0); // To keep track of the current active card

    const { slug } = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
         services.GetResource('api/products/categories/')
            .then(res => {
                setCategories(res);
            })
            .catch(err => {
                console.error('Error fetching categories:', err);
            });

        services.GetResource(`api/products/categories/${slug}/certify`)
            .then(res=>{
                product_listSet(res)

            })

        services.GetResource(`api/products/categories/${slug}/not_certify`)
            .then(res=>{
                console.log(res)
                product_list_nSet(res)
            })

        services.GetResource("api/products/frequently_viewed")
            .then(res=>{
            console.log(res[0])
            if(res[0]){
                setBlogs(res[0].content)
            }
        })

        navigate(`/product-search/${slug}`, { replace: true });
    },[slug, navigate])

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
    return(
        <div>
            {product_list && product_list_n && blogs ? (<div className={"products"}>
                    <h2 className={"pr_h2"}>Продукты</h2>
                    <ul className={"pr_bar"}>
                        {categories.map((category) => (
                            <li key={category.slug}>
                                <NavLink to={`/product-search/${category.slug}`} className={"product_a"}>
                                    {category.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <h2 className={"pr_h2_two"}>Халяльные продукты</h2>

                    <div className={"product_row row"}>

                        {product_list.map(res=>{
                            return (
                                <div className={"col-lg-2 pr_card"}>
                                    <Link to={`/reviews/${res.id}`} className={"not_link"}>
                                        <div className={"img_layer"}><img src={res.img}/></div>
                                        <div className={"text_layer"}>
                                            <p className={"pr_card_bolt"}>{res.name}</p>
                                            <p className={"pr_card_text"}>{res.details}</p>
                                            <p className={"pr_card_label"}>Халяльный</p>
                                        </div>
                                    </Link>
                                </div>

                            )
                        })}
                    </div>
                    <div className={"product_banner row"}>
                        <div className={"col-6 pr_banner_text"}>
                            <h2>Не нашел нужный продукт?</h2>
                            <p>В таком случае заполни заявку и мы добавим его в наш список</p>
                            <a href={"/"}>Оставить заявку</a>
                        </div>
                        <div className={"col-4 pr_banner_img"}>
                            <img src={banner}/>
                        </div>
                    </div>
                    <div className={"Not_halal"}>
                        <h2>Не халяльные продукты</h2>
                        <div className={"product_row row"}>
                            {product_list_n.map(res=>{
                                return (

                                    <div className={"col-lg-2 pr_card "}>
                                        <Link to={`/reviews/${res.id}`} className={"not_link"}>
                                            <div className={"img_layer"}><img src={res.img}/></div>
                                            <div className={"text_layer"}>
                                                <p className={"pr_card_bolt"}>{res.name}</p>
                                                <p className={"pr_card_text"}>{res.details}</p>
                                                <p className={"pr_card_label not_halal"}>Не халяльный</p>
                                            </div>
                                        </Link>
                                    </div>

                                )
                            })}
                        </div>

                    </div>

                    <section className={"blog-section Frequently_viewed"}>
                        <h2>Часто просматривают</h2>
                        <div className="carousel-container">
                            <button onClick={() => moveCard('prev')} className="arrow-prev">
                                <img src={arrowBack} alt="Previous"/>
                            </button>
                            <div className="card-container product_row row">
                                {blogs.slice(activeIndex, activeIndex + 4)
                                    .concat(blogs.slice(0, Math.max(0, activeIndex + 4 - blogs.length)))
                                    .map((res, index) => (
                                        <div className={"col-lg-2 pr_card"}>
                                            {res.certified? (
                                                <div>
                                                    <Link to={`/reviews/${res.id}`} className={"not_link"}>
                                                        <div className={"img_layer"}><img src={res.img}/></div>
                                                        <div className={"text_layer"}>
                                                            <p className={"pr_card_bolt"}>{res.name}</p>
                                                            <p className={"pr_card_text"}>{res.details}</p>
                                                            <p className={"pr_card_label"}>Халяльный</p>
                                                        </div>
                                                    </Link>
                                                </div>

                                            ):(
                                                <div >
                                                    <Link to={`/reviews/${res.id}`} className={"not_link"}>
                                                        <div className={"img_layer"}><img src={res.img}/></div>
                                                        <div className={"text_layer"}>
                                                            <p className={"pr_card_bolt"}>{res.name}</p>
                                                            <p className={"pr_card_text"}>{res.details}</p>
                                                            <p className={"pr_card_label not_halal"}>Не халяльный</p>
                                                        </div>
                                                    </Link>
                                                </div>)}
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
                </div>):
                <h1>loading...</h1>}
        </div>
    )
}

export default Product_categories