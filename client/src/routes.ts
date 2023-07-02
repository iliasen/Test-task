import {
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    ACCOUNT_ROUTE,
    PROFILE_ROUTE,
} from './utils/consts'


import Auth from './pages/Auth'
import Account from './pages/Account'
import Profile from './pages/Profile'

export const authRoutes = [
    {
        path: ACCOUNT_ROUTE,
        Component: Account,
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile,
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
]
