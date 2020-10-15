import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValueContacts } from "../../redux/actions";

function ContactsSearch() {
  const searchValue = useSelector(state => state.application.searchValueContacts)
  const handleChange = (e) => {
    dispatch(setSearchValueContacts(e.target.value));
  };

  const dispatch = useDispatch();
  return (
    <div className="for-search">
      <div className="search-contact-1">
        <div className="search-contact-2">
          <i className="material-icons">search</i>
        </div>
        <div className="input-search">
          <input
            type="search"
            placeholder="search contact"
            className="search-bar-skeleton"
            value={searchValue}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactsSearch;
