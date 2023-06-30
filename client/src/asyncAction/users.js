import {addManyUsersAction} from "../store/userReducer";

export const fetchUsers=() => {
    return dispatch => {//приём парамерта dispatch
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyUsersAction(json)))
    }
}