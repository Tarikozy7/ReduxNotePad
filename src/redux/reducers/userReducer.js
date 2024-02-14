// state de tutucğamız verilerin ilk değeri
const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_user':
      return 'BOŞ';

    case 'REMOVE_user':
      return 'BOŞ';

    // eğerki gelen akiyon yuakrdakilerden hiçibiri değilse state'i değiştirme
    default:
      return state;
  }
};

// reducer'ı store'a tanıtmak için export et
export default userReducer;