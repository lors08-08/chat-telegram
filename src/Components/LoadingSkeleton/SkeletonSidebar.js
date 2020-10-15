import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { max } from "moment";

function SkeletonSideBar() {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className="skeleton-outer-box">
      {skeleton.map((item) => {
        return (
          <div className="chat-skeleton" key={item} style={{ fontSize: 16, lineHeight: 1.2 }}>
            <div className="circle-skeleton">
              <SkeletonTheme color="#e3e3e3">
                <Skeleton circle={true} height={40} width={40} />
              </SkeletonTheme>
            </div>
            <div className="line-skeleton">
              <SkeletonTheme color="#e3e3e3">
                <Skeleton count={2} width={max} />
              </SkeletonTheme>
            </div>
          </div>
        )
      })}
      
    </div>
  );
}

export default SkeletonSideBar;
