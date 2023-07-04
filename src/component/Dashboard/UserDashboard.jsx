import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import PopOver from "../PopOver/PopOver";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "../Profile/Profile";
import TaskSubmission from "../Task/TaskSubmission";

const UserDashboard = () => {
  const [sideToggle, setSideToggle] = useState(false);
  const [title, setTitle] = useState("Right Path Predictor");

  return (
    <div id="dashboard">
      <div id="sidebar" className={sideToggle ? "active" : ""}>
        <div className="sidebarContent">
          <Sidebar setTitle={setTitle} />
          <div className="backBtnBox">
            <Link to="/">
              <button className="backBtn">
                <FontAwesomeIcon icon={faSignOutAlt} />
                back to home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div id="pageContent">
        <div className="dashBoardHeader">
          <div className="d-flex align-items-center">
            <div
              id="nav-icon"
              className={sideToggle ? "menu-btn" : "menu-btn open"}
              onClick={() => setSideToggle(!sideToggle)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3>{title}</h3>
          </div>
          <PopOver />
        </div>

        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/submission" element={<TaskSubmission />} />
        </Routes>

        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
