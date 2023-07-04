import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ setTitle }) => {
  return (
    <div>
      <div className="sideBrand">
        <div className="sideBrnIcon">
          <img
            src="https://rightpathpredictor.in/sisotcha/2023/04/RPP-300x292.jpg"
            height="46"
            alt="MDB Logo"
            loading="lazy"
          />
        </div>
        <h2>
          Right <span className="navHighlight">Path Predictor</span>
        </h2>
      </div>
      <nav id="sideNavbar">
        <ul>
          <li>
            <NavLink
              onClick={() => setTitle("Home")}
              activeclassname="activePage"
              exact
              to="/"
            >
              <FontAwesomeIcon icon={faUserCircle} className="iconC" />
             Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setTitle("Profile")}
              activeclassname="activePage"
              exact
              to="/dashboard/profile"
            >
              <FontAwesomeIcon icon={faUserCircle} className="iconC" />
              Profile
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => setTitle("Task Submission")}
              activeclassname="activePage"
              to="/dashboard/submission"
            >
              <FontAwesomeIcon icon={faList} className="iconC" />
              Task Submission
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
