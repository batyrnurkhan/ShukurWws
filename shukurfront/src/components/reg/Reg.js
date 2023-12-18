import vector from "./Vector.svg"
import "./Reg.css"
import {useState} from "react";
function Reg(){
    const [login,loginSet]=useState()
    const [full_name,full_nameSet]=useState()
    const [email,emailSet]=useState()
    const [number,numberSet]=useState()
    const [password,passwordSet]=useState()
    const [password_r,password_r_Set]=useState()

    return(
        <div className={"reg"}>
            <div className={"reg_card"}>
                <h2>Регистрация</h2>
                <form>
                    <input placeholder={"Логин"} id={"login"} onChange={e=>loginSet(e.target.value)}/>
                    <input placeholder={"ФИО"} id={"Full_name"} onChange={e=>full_nameSet(e.target.value)}/>
                    <input placeholder={"E-mail"} type={"email"} id={"email"} onChange={e=>emailSet(e.target.value)}/>
                    <input placeholder={"Телефон"} type={"number"} id={"number"} onChange={e=>numberSet(e.target.value)}/>
                    <input placeholder={"Пароль"} type={"password"} id={"password"} onChange={e=>passwordSet(e.target.value)}/>
                    <input placeholder={"Повторите пароль"} type={"password"} id={"password_review"} onChange={e=>password_r_Set(e.target.value)}/>
                    <button onClick={Reg_submit}>Зарегестрировать</button>
                </form>
                <img src={vector}/>
            </div>
        </div>
    )

    const Reg_submit=()=>{
        console.log(login)
    }
}

export default Reg