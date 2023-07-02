import {useState } from 'react'
import {Form} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
// @ts-ignore


import '../styles/Auth.css'
import {useDispatch, useSelector} from "react-redux";
import {selectUser, setUser} from "../store/userReducer";
import {ACCOUNT_ROUTE} from "../utils/consts";

const Auth = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let nav = useNavigate()
    const click =() => {
        if(email===user.email && password===user.password){
            dispatch(setUser({...user, auth: true}))
            nav(ACCOUNT_ROUTE)
        }
        else{
            alert('Oшибка')
        }
        console.log(email, password)
    }

    return (
        <div>
            <div className='backButton'>
                <div className='arrow'/>
                <NavLink to={'#home'} className='back'>Вернутся на главную</NavLink>
            </div>
            <div className='authContainer'>
                <div>
                    <h1 style={{fontWeight: 700}}>Вход</h1>
                    <Form className='authForm'>
                        <Form.Text>Логин</Form.Text>
                        <Form.Control
                            placeholder="Введите email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Form.Text>Пароль</Form.Text>
                        <Form.Control
                            type="password"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button id="enter" onClick={()=>click()}>
                            Войти
                        </button>
                        <button id="anyWay" >
                            Авторизация с помощью ЕС ИФЮЛ
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Auth;