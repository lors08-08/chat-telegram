import scrollToBottom from "../utils/objDiv";

export function loadContacts() {
  return (dispatch) => {
    dispatch({ type: "contacts/load/start" });
    fetch("https://api.intocode.ru:8001/api/contacts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "contacts/load/success",
          payload: json,
        });
      });
  };
}

export function loadMyId() {
  return (dispatch) => {
    dispatch({ type: "profile/load/id/start" });
    fetch("https://api.intocode.ru:8001/api/profile")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "profile/load/id/success",
          payload: json,
        });
      });
  };
}

export function chatId(item) {
  return (dispatch) => {
    dispatch({ type: "profile/close" });
    dispatch({
      type: "contacts/chat/selected",
      payload: item,
    });
  };
}

export function openProfile() {
  return (dispatch) => {
    dispatch({
      type: "profile/open",
    });
  };
}

export function setSearchValueMessages(item) {
  return (dispatch) => {
    dispatch({
      type: "application/setSearchValueMessages",
      payload: item,
    });
  };
}

export function setSearchValueContacts(item) {
  return (dispatch) => {
    dispatch({
      type: "application/setSearchValueContacts",
      payload: item,
    });
  };
}

export function loadMessages(contactId, myId) {
  return (dispatch) => {
    dispatch({ type: "messages/load/start" });
    fetch(`https://api.intocode.ru:8001/api/messages/${myId}/${contactId}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "messages/load/success",
          payload: json,
        });
        scrollToBottom();
      });
  };
}

export function sendTextValue(message) {
  return (dispatch) => {
    dispatch({
      type: "message/send/value",
      payload: message,
    });
  };
}

export function sendMessage(myId, contactId, content, type) {
  return (dispatch) => {
    dispatch({ type: "message/send/start" });
    fetch("https://api.intocode.ru:8001/api/messages", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        myId: `${myId}`,
        contactId: `${contactId}`,
        type: `${type}`,
        content: `${content}`,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "message/send/success",
          payload: json,
        });
        scrollToBottom();
      });
  };
}
