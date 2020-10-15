import React from "react";
import SkeletonSidebar from "./SkeletonSidebar";

function SkeletonLoading() {
  return (
    <div className="skeleton">
      <div className="chat-box-skeleton">
        <div className="search-skeleton">
          <div className="search-skeleton-2">
            <i className="material-icons">search</i>
          </div>
          <div className="input-skeleton">
            <input
              type="search"
              placeholder="search contact"
              className="search-bar-skeleton"
            />
          </div>
        </div>
        <SkeletonSidebar />
      </div>
      <div className="box-loading">
        Please, select a chat to start messaging
      </div>
    </div>
  );
}
export default SkeletonLoading;
