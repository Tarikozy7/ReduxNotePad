import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/actionTypes";

const AddForm = () => {
  //dispatch kurulum
  const dispatch = useDispatch();

  //form dönderilince
  console.log(v4());
  const handleSubmit = (e) => {
    e.preventDefault();

    //inputtaki veriye erişme
    const text = e.target[0].value;
    // console.log(text);

    // todo objesi oluştur
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    // oluşturulan todo'yu store'a ekle
    dispatch({
      type: ActionTypes.ADD_TODO,
      payload: newTodo,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex my-5 gap-1 " >
      <input
        placeholder="Örn: Redux çalış.."
        type="text"
        className="form-control border border-danger"
      />
      <button className="btn btn-warning border border-danger">Ekle</button>
    </form>
  );
};

export default AddForm;
