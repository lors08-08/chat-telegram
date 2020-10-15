const initialState = {
  id: {},
  loading: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "profile/load/id/start":
      return {
        ...state,
        loading: true,
      };
    case "profile/load/id/success":
      return {
        ...state,
        id: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
