import { BUY_PEN, BUY_PENCIL } from "./Constants";

const penReducer = (state = {penNum : 36}, action) =>{
    switch(action.type){
        case BUY_PEN:
            return state.penNum - 1;
        default:
            return state
    }
}

const pencilReducer = (state = {pencilNum : 22}, action) =>{
    switch(action.type){
        case BUY_PENCIL:
            return state.pencilNum - 1;
        default:
            return state
    }
}


export {
    penReducer,
    pencilReducer
}