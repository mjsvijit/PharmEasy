
import {ADD_TODO} from "./action"
import {
    FETCHED_CART_ITEMS
   
} from "./action";

const initialState = {
    cart: [],
    userDetails: {
       
        userName: ''
    }
};
const initState={
    cart:[{
        id: 1,
        title:"",
        IMG:"",
    }]
}


export const reducerTodo = (store=initState, action) => {
   switch(action.type){
    

    case FETCHED_CART_ITEMS:
        return {
            ...store,
            todos: action.payload.filter(task => task.userID === store.userDetails.userName),
        }
        return {
          
         ...store,
         todos:[...store.todos,action.payload]

        }
       
        
  default:
      return store
}
}