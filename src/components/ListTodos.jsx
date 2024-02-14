import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
  /* useSelector store'daki reducer'lara abone olmaya
   yani reducer'larda tutulan verilere erişmeye yarar
   store çok büyük olabileceğinden sadece genelde 
   ihtiyacımız olan reducer'lara abone oluruz.
   bunu için => store.reducerIsmi yazmamız gerekiyor
  */

  const store = useSelector((store) => store.todoReducer);

  // console.log(abonelik);
  return (
    <div>
      {store.todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id}/>
      ))}
    </div>
  );
};

export default ListTodos;
