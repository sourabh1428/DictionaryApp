import { ADD } from "../Actions/reduxAction";


let init=[];

const historyReducer=(state=init,action)=>{
    switch (action.type) {
        case ADD:
          return [...state, action.payload];
        default:
          return state;
      }
}

export default historyReducer;
