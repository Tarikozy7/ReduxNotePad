/**
  ##REDUCER##
 * store'un nasıl değişeceğine karar verir.
 * reducer normal bir fonksiyondur ve iki parametre alır
 * > state: store'da  tutulan verilenir son durumu,
 * > action: verilerin nasıl deşiceğini belirten obje
  
 //! reducer fonksiyonunda return edilen veri store'un son hali olur,
 */

//state de tutacağımız verilerin ilk değeri
import { ActionTypes } from "../actionTypes";

const initialState = {
  todos: [],
  category: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const tempTodos = state.todos.concat(action.payload);

      return { ...state, todos: tempTodos };

    case ActionTypes.REMOVE_TODO:
      const filtred = state.todos.filter((todo) => todo.id !== action.payload);
      // console.log('remove aksiyonu yakalandi ')
      return { ...state, todos: filtred };

    case ActionTypes.UPDATE_TODO:
      const newTodos = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );

      return { ...state, todos: newTodos };

      case ActionTypes.SET_TODOS:
        return{...state,todos:action.payload}



    default: 
      return state;
  }
};

export default todoReducer;