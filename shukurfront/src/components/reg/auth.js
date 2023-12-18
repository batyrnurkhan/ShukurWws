import vector from "./Vector.svg";
import "./Reg.css"
import React, {useState} from "react";
import Reg from "./Reg";
function Auth(){
    const [login,loginSet]=useState()
    const [Username_or_email,Username_or_emailSET]=useState()

    const [log_t,log_tSet]=useState(false);
    const LogSubmit=()=>{
        log_tSet(!log_t)
    }
    return(
        <div>
        {log_t ?(
                <div>
                    <p onClick={()=>LogSubmit()}>Авторизация</p>
                    <div className={"reg"}>
                        <div className={"reg_card"}>
                            <h2>Вход</h2>
                            <form>
                                <input placeholder={"Логин или E-mail"} id={"login"}
                                       onChange={e => loginSet(e.target.value)}/>
                                <input placeholder={"Пароль"} type={"password"} id={"password"}
                                       onChange={e => Username_or_emailSET(e.target.value)}/>
                                <button>Войти</button>
                                <h3><Reg /></h3>
                            </form>
                            <img src={vector} onClick={() => LogSubmit()}/>
                        </div>
                    </div>
                </div>):
            <p onClick={()=>LogSubmit()}>Авторизация</p>}
        </div>

    )
}

export default Auth