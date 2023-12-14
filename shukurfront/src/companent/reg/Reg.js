import vector from "./Vector.svg"
import "./Reg.css"
function Reg(){
    return(
        <div className={"reg"}>
            <div className={"reg_card"}>
                <h2>Регистрация</h2>
                <form>
                    <input placeholder={"Логин"} id={"login"}/>
                    <input placeholder={"ФИО"} id={"Full_name"}/>
                    <input placeholder={"E-mail"} type={"email"} id={"email"}/>
                    <input placeholder={"Телефон"} type={"number"} id={"number"}/>
                    <input placeholder={"Пароль"} type={"password"} id={"password"}/>
                    <input placeholder={"Повторите пароль"} type={"password"} id={"password_review"}/>
                    <button>Зарегестрировать</button>
                </form>
                <img src={vector}/>
            </div>
        </div>
    )
}

export default Reg