import { BUY_PEN, BUY_PENCIL, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./Constants";
import axios from 'axios'

function buyPen() {
    return{
        type: BUY_PEN,
        info: ''
    }
}

function buyPencil() {
    return{
        type: BUY_PENCIL,
        info: ''
    }
}


const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const fetchUsers = () =>{
    return function (dispatch) {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp => {
            const users = resp.data.map(user => user.id);
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            dispatch(fetchUserFailure(error.message))
        })
    }
}


export {
    buyPen,
    buyPencil,
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    fetchUsers
}