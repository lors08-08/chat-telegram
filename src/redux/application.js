const initialState = {
  profileOpened: false,
  searchValueMessages: "",
  searchValueContacts: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "profile/open":
      return {
        ...state,
        profileOpened: !state.profileOpened,
      };
    case "profile/close":
      return {
        ...state,
        profileOpened: false,
      };
    case "application/setSearchValueMessages":
      return {
        ...state,
        searchValueMessages: action.payload,
      };
    case "application/setSearchValueContacts":
      return {
        ...state,
        searchValueContacts: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
