import React from "react";
import { setSearchValueMessages } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

function Search() {
  const searchValue = useSelector((state) => state.application.searchValueMessages);

  const handleChange = (e) => {
    dispatch(setSearchValueMessages(e.target.value));
  };

  const dispatch = useDispatch();

  return (
      <div className="search-icon-box">
        <span className="material-icons">search</span>
        <div className="input-search">
          <input
            type="search"
            placeholder="chat search"
            className="search-bar-skeleton"
            value={searchValue}
            onChange={handleChange}
          />
        </div>
      </div>
  );
}

export default Search;
