const initialState = {
  loading: true,
  items: [],
  itemId: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "contacts/load/start":
      return {
        ...state,
        loading: true,
      };
    case "contacts/load/success":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "contacts/chat/selected":
      return {
        ...state,
        itemId: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
