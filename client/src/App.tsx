// import { useEffect } from "react";
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
// import { useSelector, useDispatch } from "react-redux";
// import {
//     // setUser,
//     clearUser,
//     selectUser,
// } from "../src/store/userReducer"; // импорт действий и селектора из userSlice
// import {User} from './interface/userInterface'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
    // const dispatch = useDispatch();
    // const user = useSelector(selectUser);

    // useEffect(() => {
    //     // эмуляция получения данных пользователя с сервера
    //     setTimeout(() => {
    //         // создание объекта пользователя
    //         const userData: User = {
    //             name: "Alice",
    //             surname: "Smith",
    //             lastname: "Johnson",
    //             id: "123",
    //             age: 25,
    //             login: "alice123",
    //             email: "alice@example.com",
    //             tel: 294821513,
    //             password: "secret",
    //             auth: true,
    //         };
    //         // отправка действия setUser с данными пользователя в качестве полезной нагрузки
    //         dispatch(setUser(userData));
    //     }, 3000);
    // }, [dispatch]); // указание зависимости от диспатчера

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter />
            <Footer/>
            {/*<div className="App">*/}
            {/*    {user ? (*/}
            {/*        <div>*/}
            {/*            <p>Name: {user.name}</p>*/}
            {/*            <p>Surname: {user.surname}</p>*/}
            {/*            <p>Lastname: {user.lastname}</p>*/}
            {/*            <p>ID: {user.id}</p>*/}
            {/*            <p>Age: {user.age}</p>*/}
            {/*            <p>Login: {user.login}</p>*/}
            {/*            <p>Email: {user.email}</p>*/}
            {/*            <p>Tel: {user.tel}</p>*/}
            {/*            <button onClick={() => dispatch(clearUser())}>Clear User</button>*/}
            {/*        </div>*/}
            {/*    ) : (*/}
            {/*        <p>Loading user...</p> // если пользователь не существует, то отображаем сообщение о загрузке*/}
            {/*    )}*/}
            {/*</div>*/}
        </BrowserRouter>
    );
}

export default App;