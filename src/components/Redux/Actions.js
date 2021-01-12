import { BUY_PEN, BUY_PENCIL, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./Constants";

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


export {
    buyPen,
    buyPencil,
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure
}