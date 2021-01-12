import { BUY_PEN, BUY_PENCIL } from "./Constants";

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


export {
    buyPen,
    buyPencil
}