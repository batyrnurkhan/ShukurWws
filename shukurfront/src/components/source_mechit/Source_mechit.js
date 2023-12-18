import "./Source_mechit.css"
import icon from "./icon.png"
import link_icon from "./image 3.png"
import star from "./image 3 (1).png"
import hz from "./hz.png"
import image_one from "./image 1.png"
import star_two from "./star 2.png"
function Source_mechit(){
    return(
        <div className={"Sourceaa-mechit"}>
            <h2>Поиск мечети</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d92983.42626009707!2d76.890112!3d43.2570368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1701840440219!5m2!1sru!2skz"
                width="100%"
                height="450"
                style={{border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className={"map_result_wrapp"}>
                <div className={"map_result"}>
                    <p>Адрес: 935902, Алматы, Казахстан, ул. Ташкетский тракт 80</p>
                </div>
            </div>
            <div className={"map_actives row"}>
                <div className={"col-2 map_actives_card"}>
                    <img src={icon}/>
                    <div className={"icon_info"}>
                        <div className={"icon_text"}>
                            <p className={"mp_ac_1"}>Acrra Central</p>
                            <p className={"mp_ac_2"}>Abos okai</p>
                        </div>
                        <div className={"bar"}>
                            <a href={"/"}><img src={link_icon} className={"link_icon"}/></a>
                            <div className={"star"}>
                                <img src={star}/>
                                <img src={star}/>
                                <img src={star}/>
                                <img src={star}/>
                                <img src={star}/>
                                <div className={"raiting"}>
                                    0
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={"col-2 map_actives_card"}>
                    <img src={icon}/>
                    <div className={"icon_info"}>
                        <div className={"icon_text"}>
                            <p className={"mp_ac_1"}>Acrra Central</p>
                            <p className={"mp_ac_2"}>Abos okai</p>
                        </div>
                        <div className={"bar"}>
                            <a href={"/"}><img src={link_icon} className={"link_icon"}/></a>
                            <div className={"star"}>
                                <img src={star}/>
                                <img src={star}/>
                                <img src={star}/>
                                <img src={star}/>
                                <img src={star}/>
                                <div className={"raiting"}>
                                    0
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={"col-2 map_actives_card mp_ac_hz"}>
                    <img src={hz} />
                </div>
                <div className={"col-2 map_actives_card mp_ac_hz"}>
                    <img src={image_one}/>
                </div>
                <div className={"col"}></div>
                <div className={"col-3 raiting_system"}>
                    <h2>Рейтинг</h2>
                    <ul>
                        <li className={"rt_sys_one"}><img src={star_two} /><p>5</p></li>
                        <li className={"rt_sys_two"}><img src={star_two} /><p>4</p></li>
                        <li className={"rt_sys_three"}><img src={star_two} /><p>3</p></li>
                        <li className={"rt_sys_four"}><img src={star_two} /><p>2</p></li>
                        <li className={"rt_sys_five"}><img src={star_two} /><p>1</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Source_mechit