import "./user_profile.css";
import "../products/products.css";
import pen from "./bi_vector-pen.svg";
import photo_2 from "./Group 136.svg";
import checked from "./el_ok-circle.svg";
import arrow from "./Group 94.svg";
import product from "../products/pngegg (36) 1.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function User_Profile({ authToken }) {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://91.228.154.48:8000/api/accounts/user_profile', {
                    headers: { Authorization: `Token ${authToken}` },
                });
                console.log(response.data[0]);
                setProfile(response.data[0]);
            } catch (error) {
                console.error('Error fetching profile', error);
            }
        };

        fetchProfile();
    }, [authToken]);

    const Log_auth = async () => {
        console.log("logauth");

        try {
            await fetch(`http://91.228.154.48:8000/auth/token/logout/`, {
                method: "POST",
                headers: {
                    Authorization: `Token ${authToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Content: 0
                })
            });
            localStorage.setItem("token", "");
            window.location.href = "";
        } catch (error) {
            console.error("Error logging out", error);
        }
    };

    return (
        <div>
            {profile ? (
                <div>
                    <Link to={"/"} className={"logauth"}><h1 onClick={Log_auth}>Выйти</h1></Link>
                    <div className={"User_profile_header"}>
                        <h2 className={"UP_h2"}>Личный кабинет</h2>
                    </div>
                    <div className={"User_profile"}>
                        <div className={"row"}>
                            <div className={"col-lg-4 UP_1_container"}>
                                {profile.avatar === null ? <img src={photo_2} alt="Avatar" /> : <img src={profile.avatar} alt="Avatar" />}
                            </div>
                            <div className={"col-lg-8 UP_2_container"}>
                                <h3 className={"UP_brim"}>
                                    {profile.username}
                                    <img src={pen} className={"UP_pen"} alt="Edit" />
                                    <div className={"UP_pen_text"}>Ред.</div>
                                </h3>
                                <div className={"UP_brim"}>
                                    <img src={checked} alt="Checked" />
                                    <div className={"UP_brim_text"}><span>E-mail:</span><span className={"UP_brim_text_margin"}>{profile.email}</span></div>
                                    <img src={pen} className={"UP_pen"} alt="Edit" />
                                    <div className={"UP_pen_text"}>Ред.</div>
                                </div>
                                <div className={"UP_brim"}>
                                    <img src={checked} alt="Checked" />
                                    <div className={"UP_brim_text"}><span>Телефон:</span><span className={"UP_brim_text_margin"}>{profile.phone_number}</span></div>
                                    <img src={pen} className={"UP_pen"} alt="Edit" />
                                    <div className={"UP_pen_text"}>Ред.</div>
                                </div>
                                <div className={"UP_brim"}>
                                    <div className={"UP_brim_text"}><span>Адрес:</span><span className={"UP_brim_text_margin"}>{profile.adres}</span></div>
                                    <img src={pen} className={"UP_pen"} alt="Edit" />
                                    <div className={"UP_pen_text"}>Ред.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"UP_green_back"}>
                        <div className={"UP_search_wrap"}>
                            <div className={"UP_search"}>
                                <h2>Поиск</h2>
                                <form className={"UP_search_form"}>
                                    <label><input />
                                        <button><img src={arrow} alt="Search" /></button>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={"User_profile UP_searcH_history"}>
                        <h2>История поиска</h2>
                        <div className={"product_row row pr_slaider"}>
                            <div className={"col-lg-2 pr_card"}>
                                <div className={"img_layer"}><img src={product} alt="Product" /></div>
                                <div className={"text_layer"}>
                                    <p className={"pr_card_bolt"}>Название товара</p>
                                    <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                                    <p className={"pr_card_label"}>Халяльный</p>
                                </div>
                            </div>
                            <div className={"col-lg-2 pr_card"}>
                                <div className={"img_layer"}><img src={product} alt="Product" /></div>
                                <div className={"text_layer"}>
                                    <p className={"pr_card_bolt"}>Название товара</p>
                                    <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                                    <p className={"pr_card_label"}>Халяльный</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default User_Profile;
