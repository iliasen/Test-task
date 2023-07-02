import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer"; // импорт редьюсера из userSlice

// создание хранилища с помощью функции configureStore и передача редьюсера из userSlice в свойство reducer
export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// экспорт типа корневого состояния приложения, который будет использоваться в селекторах и других местах
export type RootState = ReturnType<typeof store.getState>;

// экспорт типа диспатчера приложения, который будет использоваться для отправки действий в хранилище
export type AppDispatch = typeof store.dispatch;