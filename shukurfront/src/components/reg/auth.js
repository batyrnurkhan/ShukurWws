import vector from "./Vector.svg";
import "./Reg.css"
import React, {useState} from "react";
import Reg from "./Reg";

function Auth(){
    const [password, passwordSet] = useState("");
    const [login, loginSet] = useState("");
    const [error, errorSet] = useState(null);

    const [log_t, log_tSet] = useState(false);
    const LogSubmit = () => {
        log_tSet(!log_t);
    }

    const auth = () => {
        fetch("http://91.228.154.48:8000/auth/token/login/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: password,
                username: login
            })
        })
        .then(data => {
            if (data.status !== 200) {
                errorSet("Ошибка");
                console.log("error");
                return null;
            } else {
                return data.json();
            }
        })
        .then(res => {
            if (res) {
                console.log(res.auth_token);
                localStorage.setItem("token", res.auth_token);
                document.location.reload();
            }
        })
        .catch(err => {
            errorSet("Ошибка соединения");
            console.log(err);
        });
    }

    return(
        <div>
            {log_t ? (
                <div>
                    <p onClick={() => LogSubmit()}>Авторизация</p>
                    <div className={"reg"}>
                        <div className={"reg_card"}>
                            <h2>Вход</h2>
                            <form>
                                <input placeholder={"Логин или E-mail"} id={"login"}
                                       onChange={e => loginSet(e.target.value)} />
                                <input placeholder={"Пароль"} type={"password"} id={"password"}
                                       onChange={e => passwordSet(e.target.value)} />
                                <button type={"button"} onClick={() => auth()}>Войти</button>
                                {error && <div className="error">{error}</div>}
                                <h3><Reg /></h3>
                            </form>
                            <img src={vector} onClick={() => LogSubmit()} alt="Close" />
                        </div>
                    </div>
                </div>
            ) : (
                <p onClick={() => LogSubmit()}>Авторизация</p>
            )}
        </div>
    )
}

export default Auth;
