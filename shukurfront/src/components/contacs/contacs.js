import "./contacs.css"
import watsapp from "./Vector.svg"
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
function Contacs(){
    return(
        <div className={"contacs"}>
            <h2>Контакты</h2>
            <div className={"row"}>
                <div className={"col-lg-6"}>
                    <div className={"contacs_c"}>
                        <div className={"contacs_block"}>
                            <p className={"contacs_bolt"}>Адрес:</p>
                            <p className={"contacs_thin"}>050040 Казахстан, Алматы Манаса 30/31</p>
                        </div>
                        <div className={"contacs_block"}>
                            <p className={"contacs_bolt"}>Телефон:</p>
                            <p className={"contacs_thin"}> + 7 (705) 530 65 19</p>
                        </div>
                        <div className={"contacs_block"}>
                            <p className={"contacs_bolt"}>E-mail:</p>
                            <p className={"contacs_thin"}>shukurInfo@gmail.com</p>
                        </div>
                        <p className={"contacs_bolt"}>Мы в соц.сетях:</p>
                        <div className={"contacs_soical_div"}>
                            <img src={watsapp} className={"contacs_social"}/>
                            <img src={watsapp} className={"contacs_social"}/>
                            <img src={watsapp} className={"contacs_social"}/>
                            <img src={watsapp} className={"contacs_social"}/>
                        </div>
                    </div>
                </div>
                <div className={"col-lg-6"}>
                    <YMaps>
                        <div>

                            <Map defaultState={{ center: [43.235151848798054, 76.90987228082611], zoom: 9 ,controls: ["zoomControl", "fullscreenControl"],}} style={{ width:"570px",height:"320px"}}
                                 modules={["control.ZoomControl", "control.FullscreenControl"]}>
                                <Placemark geometry={[43.23746958964736, 76.90894275419565]}
                                           modules={["geoObject.addon.balloon", 'geoObject.addon.hint']}
                                           options={
                                               {
                                                   iconColor: 'green', // цвет иконки, можно также задавать в hex
                                               }
                                           }
                                />
                            </Map>

                        </div>
                    </YMaps>
                </div>
            </div>
        </div>
    )
}
export default Contacs