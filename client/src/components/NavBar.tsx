import '../styles/NavBar.css'
import {Image} from "react-bootstrap";
import {Link, NavLink, useLocation} from "react-router-dom";
import {ACCOUNT_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {selectUser} from "../store/userReducer";
// @ts-ignore
import logo from "../res/logo.png"
import {useSelector} from "react-redux";

const NavBar = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const isProfile = location.pathname === PROFILE_ROUTE
    const user = useSelector(selectUser);

    return (
        <div className='NavBar'>
            <Image src={logo}/>
            <div className='menuContainer'>
                <NavLink className='href' to={LOGIN_ROUTE}>Меню</NavLink>
                <NavLink className='href' to={REGISTRATION_ROUTE}>Вопросы и ответы</NavLink>
                <NavLink className='href' to={ACCOUNT_ROUTE}>Об АИС</NavLink>
            </div>

            <div style={{marginTop: -5}} className='d-flex'>
                <div className='notification'/>
                <div className='line'/>
                {user.auth ? <Link to={PROFILE_ROUTE} style={{textDecoration: 'none'}}>
                    <div className='d-flex align-items-center' >
                        <div style={{width: 40, height: 40}} className='photo'/>
                        <div style={{color: 'darkgray', fontWeight: 540}}>{user.name} {user.surname}</div>
                        {isProfile && <div className='youInLogin'/>}
                    </div>
                </Link>:<Link to={LOGIN_ROUTE} style={{textDecoration: 'none'}}>
                    <div className='d-flex align-items-center' >
                        <div className='enter'/>
                        <div style={{color: 'darkgray', fontWeight: 540}}>Вход в аккаунт</div>
                        {isLogin && <div className='youInLogin'/>}
                    </div>
                </Link>}

            </div>

        </div>
    );
};

export default NavBar;