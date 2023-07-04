import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import Profile from "../Profile/Profile";

const Main = () => {
  return (
    <UserDashboard>
      <Routes>
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/submission" element={<Profile />} />
      </Routes>
      <Outlet />
    </UserDashboard>
  );
};

export default Main;
