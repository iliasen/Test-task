import {NavLink} from "react-router-dom";

import '../styles/Profile.css'
import {Container, Form, Button, Tooltip, Overlay} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, setUser} from "../store/userReducer";
import {useState, FormEvent,useRef} from "react";
const Profile = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const [name,setName]= useState(user.name)
    const [surname,setSurmane]= useState(user.surname)
    const [lastname,setLastname]= useState(user.lastname)
    const [id,setId]= useState(user.id)
    const [login,setLogin]= useState(user.login)
    const [email,setEmail]= useState(user.email)
    const [tel,setTel]= useState(user.tel)

    const save = (event: FormEvent<HTMLFormElement>) => {
        if(showSecondFields){
            if(password===user.password && newPassword===confirmPassword){
                event.preventDefault();
                dispatch(setUser({...user, name:name, surname: surname, lastname:lastname, email:email, id:id, login:login, tel:tel, password: newPassword}))
                alert('Данные сохранены и пороль изменён')
            }
            else{
                alert('Ошибка')
            }
        }else{
        setShow(!show)
        event.preventDefault();
        dispatch(setUser({...user, name:name, surname: surname}))
        alert('Данные сохранены')
        }
    }

    const [show, setShow] = useState(false);
    const target = useRef(null);


    const [showSecondFields, setShowSecondFields] = useState (false);
    const [password, setPassword]= useState('')
    const [newPassword, setNewPassword]= useState('')
    const [confirmPassword, setConfirmPassword]= useState('')
    const onClick = () => setShowSecondFields (true);
    const Pass = () => (
        <div>
            <div>
                <Form.Label className='formText'>Текущий пароль</Form.Label>
                <Form.Control className='field' type='password' value={password} placeholder='Введите ваш текущий пароль' onChange={(e)=>setPassword(e.target.value)}></Form.Control>
            </div>
            <div className='d-flex'>
                <div style={{marginRight: 40}}>
                    <Form.Label className='formText'>Новый пароль пароль</Form.Label>
                    <Form.Control className='field' type='password' value={newPassword} placeholder='Введите ваш новый пароль' onChange={(e)=>setNewPassword(e.target.value)}></Form.Control>
                </div>
                <div>
                    <Form.Label className='formText'>Подтвердите новый пароль</Form.Label>
                    <Form.Control className='field' type='password' value={confirmPassword} placeholder='Повторите новый пароль' onChange={(e)=>setConfirmPassword(e.target.value)}></Form.Control>
                </div>
            </div>
        </div>
    );

    return (
        <Container>
            <div className='navigation'>
                <div className='toMainPage'>
                    <div className='arrow'/>
                    <NavLink to={'#home'} className='back'>Главная</NavLink>
                </div>
                <div className='d-flex'>
                    <div className='arrow'/>
                    <div className='back'>Профиль</div>

                    <div></div>
                </div>
            </div>

            <h2 className='mt-5'>Профиль</h2>

            <div className='name-status'>
                <div className='photo'/>
                <div style={{fontWeight:600, fontSize: 24}}>{user.name} {user.surname}</div>
                <div className='status'>Онлайн</div>
                <div className='type'>{user.type}</div>
            </div>

            <Form onSubmit={save}>
                <div className='section'>
                    <span style={{fontSize: 20, fontWeight: 600}}>Личные данные </span>
                    <div>
                        <div className='d-flex mt-3'>
                            <div style={{marginRight: 40}}>
                                <Form.Label className='formText'>Имя*</Form.Label>
                                <Form.Control className='field' placeholder="Введите имя" value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
                            </div>
                            <div>
                                <Form.Label className='formText'>Фамилия*</Form.Label>
                                <Form.Control className='field' placeholder="Введите фамилию" value={surname} onChange={(e)=>setSurmane(e.target.value)}></Form.Control>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div style={{marginRight: 40}}>
                                <Form.Label className='formText'>Отчество*</Form.Label>
                                <Form.Control className='field' placeholder="Введите отчество" value={lastname} onChange={(e)=>setLastname(e.target.value)}></Form.Control>
                            </div>
                            <div>
                                <Form.Label className='formText'>Идентивикационный номер*</Form.Label>
                                <Form.Control className='field' placeholder="Введите id" value={id} onChange={(e)=>setId(e.target.value)}></Form.Control>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <Form.Label className='formText'>Логин*</Form.Label>
                            <Form.Control className='field' placeholder="Введите логин" value={login} onChange={(e)=>setLogin(e.target.value)}></Form.Control>
                        </div>
                    </div>
                </div>

                <div className='section'>
                    <span style={{fontSize: 20, fontWeight: 600}} >Контакты </span>

                    <div className='d-flex mt-3'>
                        <div style={{marginRight: 40}}>
                            <Form.Label className='formText'>Адрес электронной почты</Form.Label>
                            <Form.Control className='field' placeholder='Введите почту' value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                        </div>
                        <div>
                            <Form.Label className='formText'>Мобильный телефон</Form.Label>
                            <Form.Control className='field' type='tel' value={tel} placeholder='Введите телефон' onChange={(e)=>setTel(e.target.value)}></Form.Control>
                        </div>
                    </div>
                </div>

                <div className='section mb-5'>
                    <span style={{fontSize: 20, fontWeight: 600}} >Пароли</span>
                    {showSecondFields ?
                    <Pass />
                    : (
                    <Button type="button" className="button--pass" onClick= {onClick}>
                        Редактировать пароль
                    </Button>
                    )}
                </div>


                <Button type='submit' className='sentButton'>Сохранить</Button>
                <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        Данные сохраненны
                    </Tooltip>
                )}
                </Overlay>
            </Form>
        </Container>
    );
};

export default Profile;