import { ADD } from "./reduxAction";


const add=(payload)=>{
    return({
        type:ADD,
        payload:payload
    })
}

export default add;