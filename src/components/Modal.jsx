import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/actionTypes";

const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    //inputtaki ismi alma
    const newText = e.target[1].value;

    //eski todo'nun bütün verilerini inputtaki değer ile güncelleme

    const updated = { ...todo, text: newText };

    //store'daki todo'yu güncelle
    dispatch({
      type: ActionTypes.UPDATE_TODO,
      payload: updated,
    });

    //modal'ı kapatma 
    close()
  };
  return (
    <div className="modal d-block text-dark bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Notu Düzenle</h5>
            <button
              onClick={close}
              type="button"
              className="btn-close"
            ></button>
          </div>
          <div className="modal-body">
            <label htmlFor="">Yeni Başlık</label>
            <input
              defaultValue={todo.text}
              type="text"
              className="form-control shadow mt-2"
            />
          </div>
          <div className="modal-footer">
            <button onClick={close} type="button" className="btn btn-secondary">
              Kapat
            </button>
            <button type="submit" className="btn btn-primary">
              Değişiklikleri Onayla
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
