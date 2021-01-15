import { act } from "react-dom/cjs/react-dom-test-utils.development";
import { BUY_PEN, BUY_PENCIL, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./Constants";
import { usersState } from "./State";

let initialState = {
    penNum : 36,
    pencilNum : 22
}

const penReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_PEN:
            return {
                ...state,
                penNum: state.penNum - action.payload
            }
        default:
            return state
    }
}

const pencilReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_PENCIL:
            return {
                ...state,
                pencilNum: state.pencilNum - action.payload
            }
        default:
            return state
    }
}


const usersReducer = (state = usersState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                users: [],
                error: action.payload
            }
    }
}


export {
    penReducer,
    pencilReducer
}