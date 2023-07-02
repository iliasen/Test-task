import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";


// @ts-ignore
import logo from "../res/logo.png";
// @ts-ignore
import bank from "../res/Footer/Bank.png"
import '../styles/Footer.css'


const Footer = () => {
    let mass = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
    ];


    return (
        <div className='Footer'>
            <div className='d-flex justify-content-between' style={{marginBottom: 42}}>
                <div>
                    <Image style={{width:100}} src={logo}/>
                    <div style={{marginTop:20, width: 300}}>
                        <div>Автоматизированная информационная система «Реестры»</div>
                        <div style={{marginTop: 10}}>© AИС «Реестры», 2023</div>
                        <div>Все права защищены</div>
                    </div>
                </div>
                <div>
                    <h6 className='head'>Техническая поддежка</h6>
                    <div>+375 29 731 32 46</div>
                    <div>+375 33 467 61 97</div>
                    <div>iliasen03@mail.ru</div>
                    <NavLink to={'https://stackoverflow.com/'} className='toHelp'>Связаться с поддержкой</NavLink>
                </div>
                <div>
                    <h6 className='head'>Контакты</h6>
                    <div>+375 29 464 79 45</div>
                    <div>+375 33 467 61 78</div>
                    <div>iliasen03@mail.ru</div>
                    <div>г. Минск, ул. К. Цеткин, д.24-705</div>
                </div>
            </div>

            <div className='bank'>
                <Image src={bank} style={{width: 180, marginRight: 50}}/>
                {mass.map((item) => (
                    <div key={item.id}>
                        Условный партнёр
                    </div>
                ))}
            </div>

            <div className='d-flex flex-column align-items-center'>
                <div>© AИС «Реестры»</div>
                <p>Разработчик: Илья Семенкович </p>
            </div>
        </div>
    );
};

export default Footer;