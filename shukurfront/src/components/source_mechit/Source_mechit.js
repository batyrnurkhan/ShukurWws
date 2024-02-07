import "./Source_mechit.css"
import icon from "./icon.png"
import link_icon from "./image 3.png"
import star from "./image 3 (1).png"
import hz from "./hz.png"
import image_one from "./image 1.png"
import star_two from "./star 2.png"
import { YMaps, Map,Placemark,Panorama} from '@pbe/react-yandex-maps';
import {useEffect, useState} from "react";


function Source_mechit({services}){
    const [places,placesSet]=useState()
    useEffect(() => {
        services.GetResource("/api/pray/locations/")
            .then(res=>{
                placesSet(res)
                console.log(res)
            })
    }, []);
    return(
        <div className={"Sourceaa-mechit"}>
            <h2>Поиск мечети</h2>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <a
                    href="https://yandex.ru/maps/162/almaty/?utm_medium=mapframe&utm_source=maps"
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                >
                    Алматы
                </a>
                <a
                    href="https://yandex.ru/maps/162/almaty/?ll=76.945465%2C43.238293&utm_medium=mapframe&utm_source=maps&z=12"
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                >
                    Алматы — Яндекс Карты
                </a>
            </div>
            <YMaps>
                <div>

                    <Map defaultState={{ center: [43.235151848798054, 76.90987228082611], zoom: 9 ,controls: ["zoomControl", "fullscreenControl"],}} style={{ width:"100%",height:"450px"}}
                         modules={["control.ZoomControl", "control.FullscreenControl"]}>
                        {places ? (places.map(res=>{
                            return(

                                <Placemark geometry={[res.latitude, res.longitude]}
                                           modules={["geoObject.addon.balloon", 'geoObject.addon.hint']}
                                           options={
                                               {
                                                   iconColor: 'green', // цвет иконки, можно также задавать в hex
                                               } }
                                           properties={
                                               {
                                                   hintContent: '<b> Нажмите на метку </b>',
                                                   // создаём пустой элемент с заданными размерами
                                                   balloonContent: `<div class="driver-card">${res.name}</div>`,
                                               }
                                            }
                                />
                            )
                        })):<h1>Loading...</h1>}

                    </Map>

                </div>
            </YMaps>



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