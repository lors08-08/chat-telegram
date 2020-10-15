import React from "react";
import { Route } from "react-router-dom";
import MainBox from "./Components/MainBox/MainBox";
import ProfileWrapper from "./Components/ProfileId/ProfileWrapper";
import SideBar from "./Components/Sidebar/SideBar";

function App() {
  return (
    <div className="app">
      <Route path="/:id?">
        <SideBar />
        <MainBox />
        <ProfileWrapper />
      </Route>
    </div>
  );
}

export default App;
