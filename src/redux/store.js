/**
 * !! STORE OLUŞTURMA
 
 * 1. redux kütüphanesinden "createStore" methodu impord edilir 
 * 2. store içerisinde tutulan veriler kategorize edilir ve reducerlar oluşturulur
 * 3. oluşturulan reducer'lar combineReducers methodu ile birleştirilir
 * 4. store oluşturulan yeni reducer tanıtılır
 * 5. oluşturulan store projeye tanıtılır
  
*/

import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer.js";
import userReducer from "./reducers/userReducer.js";

const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});



const store = createStore(rootReducer);

export default store;