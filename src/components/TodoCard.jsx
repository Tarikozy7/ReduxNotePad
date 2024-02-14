import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { useState } from "react";
import { ActionTypes } from "../redux/actionTypes";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  //store'dan todo'yu kaldır
  const handleDelete = () => {
    dispatch({
      type: ActionTypes.REMOVE_TODO,
      payload: todo.id,
    });
  };

  // store'daki todo'nun is_done değerini tersine çevir

  const handleStatus = () => {
    // todo'nun is_done değerini tersine çevir
    const updated = { ...todo, is_done: !todo.is_done };
    // console.log(updated);

    // store'daki eski todo'yu günceli ile değiştir
    dispatch({
      type: ActionTypes.UPDATE_TODO,
      payload: updated,
    });
  };

  return (
    <div className="border border-warning shadow shadow-lg p-4 my-5 rounded ">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>
      <p>{todo.created_at}</p>

      <button onClick={() => setIsOpen(true)} className="btn btn-info">
        Düzenle
      </button>

      <button onClick={handleStatus} className="btn btn-success mx-3">
        {todo.is_done ? "Geri Al" : "Tamamla"}
      </button>

      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>

      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
