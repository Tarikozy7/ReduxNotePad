/*
 ! reducer
 * store'un nasıl değiceğine karar verir.
 * reducer normal bir fonksiyondur
 * ve iki parametre alır
 * > state: store'da tutulan verilerin son durumu,
 * > action: verilerin nasıl değieceğini  belirten obje.
 
 ? önemli: reducer fonksiyonunda return edilen veri store'un son hali olur   

*/

import { ActionTypes } from '../actionTypes';

// state de tutucğamız verilerin ilk değeri
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
      // payload'ile id si gelen todoyu diziden çıkarma
      const filtred = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      // store'daki veirlerin yeni değerini belirleme
      return { ...state, todos: filtred };

    case ActionTypes.UPDATE_TODO:
      // todos dizisindeki eski eleman yerine action'un payload'ı
      // ile gelen elemanı yer değiştir
      const newTodos = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );

      return { ...state, todos: newTodos };

    case ActionTypes.SET_TODOS:
      return { ...state, todos: action.payload };
    // eğerki gelen akiyon yuakrdakilerden hiçibiri değilse state'i değiştirme
    default:
      return state;
  }
};

// reducer'ı store'a tanıtmak için export et
export default todoReducer;

// // 1) splice yöntemi
// // a) state'deki todoların kopyasını oluşturun
// const copyTodos = [...state.todos];

// // b) güncellenicek elemanın dizide sırasını bul
// const index = copyTodos.findIndex(
//   (todo) => todo.id === action.payload.id
// );

// // c) splice ile diziyi güncelle
// copyTodos.splice(index, 1, action.payload);