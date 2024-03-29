import vector from "./Vector.svg"
import "./Reg.css"
import {useState} from "react";
import 'react-phone-number-input/style.css'
import Input from 'react-phone-number-input/input'

function Reg(){
    const [login, loginSet] = useState()
    const [full_name, full_nameSet] = useState()
    const [email, emailSet] = useState()
    const [number, setNumber] = useState('')
    const [password, passwordSet] = useState()
    const [password_r, password_r_Set] = useState()
    const [eror, erorSet] = useState("")
    const [reg_t,reg_tSet] = useState(false);

    const RegSubmit=()=>{
        reg_tSet(!reg_t)
    }

    const PostUser=async (user)=> {
        if (password === password_r) {
            return await fetch(' http://127.0.0.1:8000/auth/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: login,
                    email: email,
                    password: password,
                    full_name: full_name,
                    phone_number: number,
                    adres: null,
                    avatar: null
                })
            })
                .then(data=>{
                    if(data.status !== 201) {
                        erorSet("Ошибка")
                    }
                    else document.location.reload()
                })
                .catch(eror=>{
                    erorSet(eror)
                })
        }
        else{
            erorSet("пароли не совпадают")
        }
    }
    return(
        <div>
            {reg_t ? (<div className={"reg"}>
                    <div className={"reg_card"}>
                        <h2>Регистрация</h2>
                        <form>
                            <input placeholder={"Логин"} id={"login"} onChange={e=>loginSet(e.target.value)}/>
                            <input placeholder={"ФИО"} id={"Full_name"} onChange={e=>full_nameSet(e.target.value)}/>
                            <input placeholder={"E-mail"} type={"email"} id={"email"} onChange={e=>emailSet(e.target.value)}/>
                            <Input placeholder="+7XXXXXXXX" value={number} onChange={setNumber}  limitMaxLength={true} maxLength={15}/>
                            <input placeholder={"Пароль"} type={"password"} id={"password"} onChange={e=>passwordSet(e.target.value)}/>
                            <input placeholder={"Повторите пароль"} type={"password"} id={"password_review"} onChange={e=>password_r_Set(e.target.value)}/>
                            <button type={"button"} onClick={()=>PostUser()}>Зарегестрировать</button>
                        </form>
                        <h1>{eror ? eror :""}</h1>
                        <img src={vector} onClick={()=>RegSubmit()}/>
                    </div>
                </div>):
                (<h3 onClick={()=>RegSubmit()}>Регистрация</h3>)}
        </div>
    )

}

export default Reg