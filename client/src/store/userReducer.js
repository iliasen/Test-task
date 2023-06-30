const defaultState={
    users: [],
}

const ADD_MANU_USERS = 'ADD_MANU_USERS'
const ADD_USER = 'ADD_USER'
const REMOVE_USER = 'REMOVE_USER'
export const userReducer = (state = defaultState, action) =>{
    switch(action.type){
        case ADD_MANU_USERS:
            return {...state, users: [...state.users, ...action.payload]}
        case ADD_USER:
            return {...state, users: [...state.users, action.payload]}
        case REMOVE_USER:
            return {...state, users: state.users.filter(user => user.id !== action.payload)}
        default:
            return state
    }
}

export const addUserAction = (payload) => ({type: ADD_USER, payload})
export const addManyUsersAction = (payload) => ({type: ADD_MANU_USERS, payload})
export const removeUserAction = (payload) => ({type: REMOVE_USER, payload})