//import  { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import {LOGIN_ROUTE} from '../utils/consts'
import {useSelector} from "react-redux";
import {selectUser} from "../store/userReducer";
//import { Context } from '../index'

const AppRouter = () => {
    const user = useSelector(selectUser);
    return (
        <Routes>
            {user.auth &&
                authRoutes.map(
                    (
                        { path, Component } //для авторизованных пользователей
                    ) => <Route key={path} path={path} element={<Component />}/>
                )}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />}/>
            ))}
            <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
            {/*возращает начальную страницу если проприсан левый URL*/}
        </Routes>
    )
}

export default AppRouter
