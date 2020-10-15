const initialState = {
  loading: true,
  chatLog: [],
  sentMessage: "",
  sentMessageType: "text",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "messages/load/start":
      return {
        ...state,
        loading: true,
      };
    case "messages/load/success":
      return {
        ...state,
        loading: false,
        chatLog: action.payload,
      };
    case "message/send/value":
      return {
        ...state,
        sentMessage: action.payload,
      };
    case "message/send/type":
      return {
        ...state,
        sentMessageType: action.payload,
      };
    case "message/send/start":
      return {
        ...state,
        loading: false,
      };
    case "message/send/success":
      return {
        ...state,
        chatLog: [...state.chatLog, action.payload],
        sentMessage: "",
      };

    default:
      return state;
  }
}

export default reducer;
