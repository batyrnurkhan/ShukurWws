import "./contacs.css"
import watsapp from "./Vector.svg"
import map from "./Rectangle 93.png"
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
                    <img src={map} className={"contacs_map"}/>
                </div>
            </div>
        </div>
    )
}
export default Contacs