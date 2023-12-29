import vector from "./Vector.svg";
import "./Reg.css"
import React, {useState} from "react";
import Reg from "./Reg";
function Auth({services}){
    const [password,passwordSet]=useState()
    const [login,loginSet]=useState()
    const [eror,erorSet]=useState()

    const [log_t,log_tSet]=useState(false);
    const LogSubmit=()=>{
        log_tSet(!log_t)
    }
    const auth=()=>{
        services.SendResource('auth/token/login/',
            JSON.stringify({
                password: password,
                username: login
            })
        )
            .then(res=>{
                console.log(res.auth_token)
                localStorage.setItem("token",res.auth_token)
                document.location.reload()
            })
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
                                       onChange={e => passwordSet(e.target.value)}/>
                                <button type={"button"} onClick={()=>auth()}>Войти</button>
                                <h3><Reg services={services}/></h3>
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