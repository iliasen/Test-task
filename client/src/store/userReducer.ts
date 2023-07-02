// userSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/index";
import {User} from '../interface/userInterface'


interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: {
        name: "Alice",
        surname: "Smith",
        lastname: "Johnson",
        id: "123",
        age: 25,
        login: "alice123",
        email: "alice@example.com",
        tel: 294821513,
        password: "1111",
        type: 'Пользователь',
        auth: false,
    },
};


export const userSlice = createSlice({
    name: "user",
    initialState, // начальное состояние
    reducers: {
        // редьюсеры для синхронных действий
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
    },
});


export default userSlice.reducer;


export const { setUser, clearUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;