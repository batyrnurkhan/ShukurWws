import vector from "./Vector.svg";
import "./Reg.css";
import { useState } from "react";
import 'react-phone-number-input/style.css';
import Input from 'react-phone-number-input/input';

function Reg() {
    const [login, loginSet] = useState("");
    const [full_name, full_nameSet] = useState("");
    const [email, emailSet] = useState("");
    const [number, setNumber] = useState("");
    const [password, passwordSet] = useState("");
    const [password_r, password_r_Set] = useState("");
    const [eror, erorSet] = useState("");
    const [reg_t, reg_tSet] = useState(false);

    const RegSubmit = () => {
        reg_tSet(!reg_t);
    }

    const PostUser = async () => {
        if (password === password_r) {
            try {
                const requestBody = {
                    username: login,
                    email: email,
                    password: password,
                    re_password: password_r,  // Adding re_password field
                    full_name: full_name,
                    phone_number: number,
                    adres: null,
                    avatar: null
                };
                console.log('Request Body:', requestBody);

                const response = await fetch('http://91.228.154.48:8000/auth/users/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody)
                });

                console.log('Response Status:', response.status);
                const responseData = await response.json();
                console.log('Response Data:', responseData);

                if (response.status !== 201) {
                    erorSet(`Ошибка при регистрации: ${JSON.stringify(responseData)}`);
                } else {
                    document.location.reload();
                }
            } catch (error) {
                erorSet(`Ошибка соединения: ${error.message}`);
            }
        } else {
            erorSet("Пароли не совпадают");
        }
    }

    return (
        <div>
            {reg_t ? (
                <div className={"reg"}>
                    <div className={"reg_card"}>
                        <h2>Регистрация</h2>
                        <form>
                            <input placeholder={"Логин"} id={"login"} onChange={e => loginSet(e.target.value)} />
                            <input placeholder={"ФИО"} id={"Full_name"} onChange={e => full_nameSet(e.target.value)} />
                            <input placeholder={"E-mail"} type={"email"} id={"email"} onChange={e => emailSet(e.target.value)} />
                            <Input placeholder="+7XXXXXXXX" value={number} onChange={setNumber} limitMaxLength={true} maxLength={15} />
                            <input placeholder={"Пароль"} type={"password"} id={"password"} onChange={e => passwordSet(e.target.value)} />
                            <input placeholder={"Повторите пароль"} type={"password"} id={"password_review"} onChange={e => password_r_Set(e.target.value)} />
                            <button type={"button"} onClick={() => PostUser()}>Зарегистрировать</button>
                        </form>
                        <h1>{eror}</h1>
                        <img src={vector} onClick={() => RegSubmit()} alt="Close" />
                    </div>
                </div>
            ) : (
                <h3 onClick={() => RegSubmit()}>Регистрация</h3>
            )}
        </div>
    );
}

export default Reg;
